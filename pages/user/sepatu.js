import Form from "../../components/Form";
import UserLayout from "../../components/user/UserLayout";
import Script from "next/script";
import { useRouter } from "next/router";
export default function sepatu() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter()
  const {id,nama} = router.query
  return (
   
    <UserLayout>
     <h3>Welcome</h3>
     <p>Toko Sepatu</p>
     <p>id : {id}</p>
     <p>nama : {nama}</p>
      <Form />
    </UserLayout>  
     
    
  );
}