import {useEffect,useState} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router-dom';
import{Link} from 'react-router-dom';

const ProductDetails = () => {
  const[data,setData]=useState({});
  const[loading,setLoading]=useState(true);
  const {slug} = useParams();
   useEffect(()=>{
    async function fetchData(){
      const baseURL=`http://127.0.0.1:8000/api/data/${slug}`;
      const response=await axios.get(baseURL);
      setLoading(false);
      setData(response.data);
  
     
    }
    fetchData();
},[]);
console.log(data);

  return (
     <>
          {
              loading == false &&
              <div class="container m-5 p-5">
                  <div class="row">
                      <div class="col-6">
                          <img src={data.img_src}
                              width="70%" height="250px" />
    
                      </div>
                      <div class="col-6">
                          <div>
                              <h2>{data.name}</h2>
                          </div>
                          <div>
                              Product Category:{data.category}
                          </div>
                          <div>
                              Price:Rs{data.price}
                          </div>
                          <div>
                              {data.description}
                          </div>
                          <div>
                              <form>
              
                                  <div class="row p-3">
                                      <div class="m-2">
                                          Qty:
                                          <input type="number" name="quantity" class="w-25" value="1" min="1" />
                                          <br />
                                      </div>
                                      <div>
                                      <Link
										className='btn btn-warning align-center text-white' value="Add to cart"
										to={`/cart`}
									>
										Add to cart
									</Link>
                            
                           
                                      </div>
                                  </div>
                    
                              </form>
                          </div>
                      </div>  </div>
              </div>
          } </>
  );
};

export default ProductDetails;