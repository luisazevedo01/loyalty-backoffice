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
import { useForm, UseFormReturn } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { z } from 'zod'

export type StampCardFormValues = z.infer<typeof stampCardFormSchema>

interface CreateStampCardProps {
  open: boolean
  onSubmit: (data: StampCardFormValues) => void
  onShowDialog: (isOpen: SetStateAction<boolean>) => void
}

export function CreateStampCard({
  open,
  onSubmit,
  onShowDialog,
}: CreateStampCardProps) {
  const { t } = useTranslation()

  const form = useForm<StampCardFormValues>({
    resolver: zodResolver(stampCardFormSchema),
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
          <DialogTitle>Add a new Stamp Card</DialogTitle>
          <DialogDescription>
            Here you can make a new Stamp Card loyalty program.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className='max-h-96 space-y-6 overflow-scroll px-4'
          >
            <FormField
              control={form.control}
              name='title'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder={'Title'} {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='message'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder='The message you want your stamp card to show.'
                      className='resize-none'
                      rows={4}
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Make sure to add any information that may be relevant.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='description'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder='Your stamp card description.'
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
              name='stamps'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nº of Stamps</FormLabel>
                  <FormControl>
                    <Input
                      type='text'
                      inputMode='numeric'
                      pattern='[0-9]*'
                      placeholder='Number of Stamps'
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
              name='conditions'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Terms & Conditions</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder='Please add your terms and conditions.'
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

export const stampCardFormSchema = z.object({
  title: z
    .string()
    .min(2, {
      message: 'The title must be at least 2 characters.',
    })
    .max(30, {
      message: 'The name must not be longer than 30 characters.',
    }),
  message: z
    .string()
    .min(4, {
      message: 'The message must be at least 2 characters.',
    })
    .max(100, {
      message: 'Message must not be longer than 100 characters.',
    }),
  description: z
    .string()
    .min(4, {
      message: 'The description must be at least 2 characters.',
    })
    .max(100, {
      message: 'Description must not be longer than 100 characters.',
    }),
  stamps: z.string().regex(/^\d+$/, 'Please enter a valid number'),
  company: z.string({
    required_error: 'YPlease select a company.',
  }),
  conditions: z.string().optional(),
  returnPolicy: z.string({
    required_error: 'You must add a return policy.',
  }),
})
