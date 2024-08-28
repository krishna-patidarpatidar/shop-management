import { toast } from "react-toastify";

const Toast = {}


Toast.successMsg = (msg)=>{
    toast.success(msg)
}

Toast.errorMsg = (msg)=>{
  toast.error(msg)
}


export default Toast
