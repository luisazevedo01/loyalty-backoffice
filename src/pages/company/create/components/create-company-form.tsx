import { z } from 'zod'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
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
import { Textarea } from '@/components/ui/textarea'
import { toast } from '@/components/ui/use-toast'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTranslation } from 'react-i18next'

interface CreateCompanyFormProps {
  createCompany: (data: z.infer<typeof companyFormSchema>) => void;
}

type CompanyFormValues = z.infer<typeof companyFormSchema>

export default function CreateCompanyForm(props: CreateCompanyFormProps) {
  const {t} = useTranslation();
  const form = useForm<CompanyFormValues>({
    resolver: zodResolver(companyFormSchema),
    mode: 'onChange',
  })

  function onSubmit(data: CompanyFormValues) {
    props.createCompany(data);
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
                  placeholder={t('lbl_company_name')}
                  {...field}
                />
              </FormControl>
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
                  placeholder='Your company description, any information that may be important.'
                  className='resize-none'
                  rows={10}
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
          name='category'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Category</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder='Select a category.' />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value='coffee'>Coffee</SelectItem>
                  <SelectItem value='restaurant'>Restaurant</SelectItem>
                  <SelectItem value='education'>Education</SelectItem>
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
        <FormField
          control={form.control}
          name='logo'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Logo</FormLabel>
              <FormControl>
                <Input placeholder='' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='website'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Website</FormLabel>
              <FormControl>
                <Input
                  placeholder='Please fill with your website link'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='facebook'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Facebook</FormLabel>
              <FormControl>
                <Input
                  placeholder='Please fill with your facebook profile link'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='instagram'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Instagram</FormLabel>
              <FormControl>
                <Input
                  placeholder='Please fill with your instagram profile link'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* <div>
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
                  <FormDescription className={cn(index !== 0 && 'sr-only')}>
                    Add contacts to your company.
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
        </div> */}
        <Button type='submit' onClick={form.handleSubmit(onSubmit)}>
          Add company
        </Button>
      </form>
    </Form>
  )
}

export const companyFormSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: 'The name must be at least 2 characters.',
    })
    .max(30, {
      message: 'The name must not be longer than 30 characters.',
    }),
  description: z
    .string()
    .min(4, {
      message: 'The description must be at least 2 characters.',
    })
    .max(100, {
      message: 'Description must not be longer than 100 characters.',
    }),
  logo: z.string().optional(),
  website: z.string().optional(),
  facebook: z.string({
    required_error: 'You must add your facebook account.',
  }),
  instagram: z.string({
    required_error: 'You must add your instagram account.',
  }),
  category: z.string({
    required_error: 'Please select a category.',
  }),
  // identificationNumber: z.string().min(9).max(14).optional(),
  // additionalInfo: z.string().max(160).min(4).optional(),
  // website: z.string({
  //   required_error: "Please fill the website."
  // }),
  // contacts: z
  //   .array(
  //     z.object({
  //       value: z.string().min(9, {
  //         message: 'Contact must be at least 9 characters.',
  //       }),
  //     })
  //   )
  //   .optional(),
  // location: z
  //   .string()
  //   .min(3, {
  //     message: 'The location must be at least 3 characters.',
  //   })
  //   .optional(),
})
