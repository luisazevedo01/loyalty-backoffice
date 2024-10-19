import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { zodResolver } from '@hookform/resolvers/zod'
import { SetStateAction } from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { z } from 'zod'

export type CashbackFormValues = z.infer<typeof cashbackFormSchema>

interface CreateCashbackDialogProps {
  open: boolean
  onSubmit: (data: CashbackFormValues) => void
  onShowDialog: (isOpen: SetStateAction<boolean>) => void
}

export function CreateCashbackDialog({
  open,
  onSubmit,
  onShowDialog,
}: CreateCashbackDialogProps) {
  const { t } = useTranslation()

  const form = useForm<CashbackFormValues>({
    resolver: zodResolver(cashbackFormSchema),
    mode: 'onChange',
  })

  const onOpenChange = (isOpen: boolean) => {
    form.reset();
    onShowDialog(isOpen);
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className='sm:max-w-[585px]'>
        <DialogHeader>
          <DialogTitle>Add new Cashback program</DialogTitle>
          <DialogDescription>
            Here you can make a new Cashback loyalty program.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className='max-h-96 space-y-6 overflow-scroll px-4'
          >
            <FormField
              control={form.control}
              name='description'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Input placeholder={'Please fill with your program description.'} {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='conditions'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Conditions</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder='Please fill with your program conditions.'
                      className='resize-none'
                      rows={4}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='percentage'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Percentage</FormLabel>
                  <FormControl>
                    <Input
                      type='text'
                      inputMode='numeric'
                      pattern='[0-9]*'
                      placeholder='Please fill the percentage of cashback.'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='company'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder='Select a company.' />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value='example1'>Company 1</SelectItem>
                      <SelectItem value='example2'>Company 2</SelectItem>
                      <SelectItem value='example3'>Company 3</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='returnPolicy'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Return policy</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder='Please inform users of your return policy.'
                      className='resize-none'
                      rows={4}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
        <DialogFooter>
          <Button type='submit' onClick={form.handleSubmit(onSubmit)}>
            Add
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export const cashbackFormSchema = z.object({
  description: z
    .string()
    .min(2, {
      message: 'The description must be at least 2 characters.',
    })
    .max(30, {
      message: 'The description must not be longer than 30 characters.',
    }),
  conditions: z
    .string()
    .min(4, {
      message: 'Conditions must be at least 2 characters.',
    })
    .max(100, {
      message: 'Conditions must not be longer than 100 characters.',
    }),
  percentage: z.string().regex(/^\d+$/, 'Please enter a valid number'),
  company: z.string({
    required_error: 'Please select a company.',
  }),
  returnPolicy: z.string({
    required_error: 'You must add a return policy.',
  }),
})
