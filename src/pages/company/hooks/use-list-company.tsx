import HttpRequest from "@/helpers/HttpRequest";

interface UseListCompanyController {
  getCompanies: () => Promise<any>;
}

const useListCompany = (): UseListCompanyController => {
  const getCompanies = async () => {
    try {
      const res = await HttpRequest.GET('/company');
      console.log(res, "!!!!!!?!")
      return res.data;
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
