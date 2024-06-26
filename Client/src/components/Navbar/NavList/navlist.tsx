import { Flex, Link } from '@radix-ui/themes'
import { memo } from 'react'
// import {useKindeAuth} from "@kinde-oss/kinde-auth-react";
// import { useSelector,useDispatch } from 'react-redux';
// import { changeUserState } from '../../../app/loginSlice';

const navlist = memo(() => {
  // const user = useSelector((state:any)=>state.user.value)
  // const dispatch=useDispatch();
  // const {register,isAuthenticated,logout}:any = useKindeAuth();
  // useEffect(()=>{
  //   dispatch(changeUserState());
  // },[isAuthenticated]);
  const handleNotAvalable = ()=>{
    alert("This is currently not available ...");
  }
  return (
    <Flex gap={{ initial: '3', md: '5', xl: '7', }} align='center' wrap='wrap' direction={{initial:'column',xs:'row'}} style={{marginLeft:'auto'}}>
      <Link href='https://github.com/ManishBirthlia/StreamZone' 
      size={{ initial: '1', sm: '2', xl: '3', }} >GitHub</Link>
      <Link href='https://www.linkedin.com/in/manish-birthlia/' size={{ initial: '1', sm: '2', xl: '3', }}>Linkedin</Link>
      <Link href='#' onClick={handleNotAvalable} size={{ initial: '1', sm: '2', xl: '3', }}>Youtube</Link>
      {/* <Button onClick={user?logout:register} style={{cursor:'pointer'}} size={{ initial: '1', md: '2', xl: '3', }} >{user?"Logout":"Register"}</Button> */}
    </Flex>
  )
})

export default navlist