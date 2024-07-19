import { z } from 'zod'
import { Link } from 'react-router-dom'
import { useFieldArray, useForm } from 'react-hook-form'
import { Button } from '@/components/custom/button'
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
import { toast } from '@/components/ui/use-toast'
import { cn } from "@/utils/classes"
import { zodResolver } from '@hookform/resolvers/zod'
import { Card, CardContent } from '@/components/ui/card'

const profileFormSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: 'Name must be at least 2 characters.',
    })
    .max(30, {
      message: 'Name must not be longer than 30 characters.',
    }),
  email: z
    .string({
      required_error: 'Please select an email to display.',
    })
    .email(),
  //bio: z.string().max(160).min(4),
  contacts: z
    .array(
      z.object({
        value: z.string(),
      })
    )
    .optional(),
})

type CompanyFormValues = z.infer<typeof profileFormSchema>

// This can come from your database or API.
const defaultValues: Partial<CompanyFormValues> = {
  contacts: [{ value: 'Carlos Silva' }, { value: 'Fábio Henriques' }],
}

export default function CompanyForm() {
  const form = useForm<CompanyFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues,
    mode: 'onChange',
  })

  const { fields, append } = useFieldArray({
    name: 'contacts',
    control: form.control,
  })

  function onSubmit(data: CompanyFormValues) {
    toast({
      title: 'You submitted the following values:',
      description: (
        <pre className='mt-2 w-[340px] rounded-md bg-slate-950 p-4'>
          <code className='text-white'>{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  return (
    <div className='grid grid-cols-1 gap-4'>
      <Card className='col-span-1 p-2'>
        <CardContent className='p-6'>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
              <FormField
                control={form.control}
                name='name'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder='Please fill with your new name...'
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      This is your public display name. It can be your real name
                      or a pseudonym. You can only change this once every 30
                      days.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder='Select a verified email to display' />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value='m@example.com'>
                          m@example.com
                        </SelectItem>
                        <SelectItem value='m@google.com'>
                          m@google.com
                        </SelectItem>
                        <SelectItem value='m@support.com'>
                          m@support.com
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormDescription>
                      You can manage verified email addresses in your{' '}
                      <Link to='/examples/forms'>email settings</Link>.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/*         <FormField
          control={form.control}
          name='bio'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Bio</FormLabel>
              <FormControl>
                <Textarea
                  placeholder='Tell us a little bit about yourself'
                  className='resize-none'
                  {...field}
                />
              </FormControl>
              <FormDescription>
                You can <span>@mention</span> other users and organizations to
                link to them.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        /> */}
              <div>
                {fields.map((field, index) => (
                  <FormField
                    control={form.control}
                    key={field.id}
                    name={`contacts.${index}.value`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className={cn(index !== 0 && 'sr-only')}>
                          Contacts
                        </FormLabel>
                        <FormDescription
                          className={cn(index !== 0 && 'sr-only')}
                        >
                          Add your contacts here
                        </FormDescription>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                ))}
                <Button
                  type='button'
                  variant='outline'
                  size='sm'
                  className='mt-2'
                  onClick={() => append({ value: '' })}
                >
                  Add Contact
                </Button>
              </div>
              <Button type='submit'>Update profile</Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  )
}
