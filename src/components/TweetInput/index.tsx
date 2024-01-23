import { useState } from "react";
import { postTweet } from "../../utils/apis";
import { ToastContainer, toast } from "react-toastify";

function TweetInput({ detectChange, setDetectChange }) {
  const author = "Areeb";
  const [content, setContent] = useState("");

  const success = () => toast("You posted a Tweet!");
  const fail = () => toast("Your post is empty!");
  const failApi = () => toast("Something went wrong!");

  const handleOnChange = (e) => {
    const text = e.target.value;
    setContent(text);
  };

  const createTweet = async () => {
    const body = {
      author: author,
      content: content,
    };
    if (content != "") {
      const response = await postTweet(body);
      if (response == "OK") {
        success();
        setDetectChange(!detectChange);
      } else {
        failApi();
      }
    } else {
      fail();
    }
    setContent("");
  };

  return (
    <>
      <div className="m-2">
        <div className="grid grid-cols-12 gap-0 border-b-2 border-slate-700">
          <div className="col-span-1">
            <img
              className="inline-block h-[3.875rem] w-[3.875rem] rounded-full"
              src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg"
              alt="Image Description"
            ></img>
          </div>
          <div className="col-span-11 align-middle text-left mb-2">
            <textarea
              id="textarea-label"
              className="py-3 px-4 block w-full rounded-lg text-sm bg-transparent focus:outline-none"
              rows={3}
              placeholder="What is happening?"
              onChange={(e) => handleOnChange(e)}
              value={content}
            ></textarea>
          </div>
        </div>
        <div className="text-right my-2">
          <button
            onClick={() => createTweet()}
            className="bg-blue-500 px-2 rounded mb-2 disabled:bg-gray-500"
            disabled={content == ""}
          >
            Post
          </button>
        </div>
      </div>
      <div>
        <ToastContainer />
      </div>
    </>
  );
}

export default TweetInput;
