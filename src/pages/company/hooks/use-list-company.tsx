import HttpRequest from '@/helpers/http-request'

interface UseListCompanyController {
  getCompanies: () => Promise<void>;
}

const useListCompany = (): UseListCompanyController => {
  const getCompanies = async () => {
    try {
      const res = await HttpRequest.GET('/company');
      console.log(res, "!!!!!!?!")
    } catch (err) {
      console.log(err)
      alert('Error on getCompanies()')
    }
  }
  return {
    getCompanies,
  }
}

export default useListCompany;
