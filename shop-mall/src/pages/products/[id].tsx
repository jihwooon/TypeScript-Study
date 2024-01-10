import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query';
import { QueryKeys, graphqlFetcher } from '../../queryClient'
import ProductDetail from '../../components/products/detail'
import { GET_PRODUCT, Product } from "../../graphql/products"

const ProductDetailPage = () => {
  const { id } = useParams()

  const { data } = useQuery<Product>([QueryKeys.PRODUCTS, id], () => graphqlFetcher<Product>(GET_PRODUCT, { id }))
  if (!data) return null;

  return (
    <div>
      <h2>상품 상세</h2>
      <ProductDetail item={data} />
    </div>
  )
}

export default ProductDetailPage;
