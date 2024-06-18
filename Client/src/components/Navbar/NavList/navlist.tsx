import { Button, Flex, Link } from '@radix-ui/themes'
import { memo, useEffect } from 'react'
import {useKindeAuth} from "@kinde-oss/kinde-auth-react";
import { useSelector,useDispatch } from 'react-redux';
import { changeUserState } from '../../../app/loginSlice';

const navlist = memo(() => {
  const user = useSelector((state:any)=>state.user.value)
  const dispatch=useDispatch();
  const {register,isAuthenticated,logout}:any = useKindeAuth();
  useEffect(()=>{
    dispatch(changeUserState());
  },[isAuthenticated]);
  return (
    <Flex gap={{ initial: '3', md: '5', xl: '7', }} align='center' wrap='wrap' direction='row' style={{marginLeft:'auto'}}>
      <Link href='#' >Home</Link>
      <Link href='#' >About</Link>
      <Link href='#' >Contact</Link>
      <Button onClick={user?logout:register} style={{cursor:'pointer'}}>{user?"Logout":"Register"}</Button>
    </Flex>
  )
})

export default navlist