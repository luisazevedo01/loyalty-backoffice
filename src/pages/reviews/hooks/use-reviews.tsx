import HttpRequest from '@/helpers/HttpRequest'

interface UseReviewsController {
    getReviews: () => Promise<void>;
}

const useReviews = (): UseReviewsController => {
  const getReviews = async () => {
    try {
      const res = await HttpRequest.GET('/review/getByUserId/luidsazd', );
      console.log(res, "!!!!!!?!")
    } catch (err) {
      console.log(err)
      alert('Error on getReviews()')
    }
  }
  return {
    getReviews,
  }
}

export default useReviews;
