/* <--- all toasts must be called and exported from here ---> */

import { toast } from "react-toastify";

/* <--- create tweet success toast ---> */
export const success = () =>
  toast("You posted a Tweet!", {
    type: "success",
  });

/* <--- error toast ---> */
export const emptyError = () =>
  toast("Your post is empty!", {
    type: "warning",
  });

/* <--- delete tweet success toast ---> */
export const deleteSuccess = () =>
  toast("You deleted a Tweet!", {
    type: "success",
  });

/* <--- edit tweet success toast ---> */
export const editSuccess = () =>
  toast("Your Tweet updated!", {
    type: "success",
  });

/* <--- api fail toast ---> */
export const fail = () =>
  toast("Something went wrong!", {
    type: "warning",
  });
