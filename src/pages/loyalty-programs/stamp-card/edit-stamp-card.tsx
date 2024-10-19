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
import {
  stampCardFormSchema,
  StampCardFormValues,
} from './create-stamp-card'

interface EditStampCardProps {
  open: boolean
  onSubmit: (data: StampCardFormValues) => void
  onShowDialog: (isOpen: SetStateAction<boolean>) => void
}

const defaultValues: Partial<StampCardFormValues> = {
  title: '2 refeições por 1',
  message: '2 menus pelo preço de 1',
  description: 'This is the additional description...',
  stamps: "2",
  company: 'example2',
  conditions: 'This condition must be respected',
  returnPolicy: 'Only in Açores',
}

export function EditStampCard({
  open,
  onSubmit,
  onShowDialog,
}: EditStampCardProps) {
  const { t } = useTranslation()

  const form = useForm<StampCardFormValues>({
    resolver: zodResolver(stampCardFormSchema),
    defaultValues,
    mode: 'onChange',
  })

  const onOpenChange = (isOpen: boolean) => {
    form.reset()
    onShowDialog(isOpen)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className='sm:max-w-[585px]'>
        <DialogHeader>
          <DialogTitle>Edit your Stamp Card</DialogTitle>
          <DialogDescription>
            Here you can edit the information associated with this Stamp Card
            loyalty program.
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
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
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
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
