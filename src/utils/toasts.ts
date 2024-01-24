import { toast } from "react-toastify";

export const success = () =>
  toast("You posted a Tweet!", {
    type: "success",
  });

export const emptyError = () =>
  toast("Your post is empty!", {
    type: "warning",
  });

export const deleteSuccess = () =>
  toast("You deleted a Tweet!", {
    type: "success",
  });

export const editSuccess = () =>
  toast("Your Tweet updated!", {
    type: "success",
  });

export const fail = () =>
  toast("Something went wrong!", {
    type: "warning",
  });
