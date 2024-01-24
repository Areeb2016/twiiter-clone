import { ReactElement, useState } from "react";
import { postTweet } from "../../utils/apis";
import { ToastContainer } from "react-toastify";
import { TweetInputProps } from "../../utils/interfaces";
import { emptyError, fail, success } from "../../utils/toasts";

const TweetInput = (props: TweetInputProps): ReactElement => {
  const [author, setAuthor] = useState("Areeb");
  const [content, setContent] = useState("");

  const handleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text: string = e.target.value;
    setContent(text);
  };

  const handleOnInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text: string = e.target.value;
    setAuthor(text);
  };

  const onCancel = () => {
    setAuthor("Areeb");
    setContent("");
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
        props.setDetectChange(!props.detectChange);
      } else {
        fail();
      }
    } else {
      emptyError();
    }
    setAuthor("Areeb");
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
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                handleOnChange(e)
              }
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

      <button
        type="button"
        className="mb-4 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
        data-hs-overlay="#hs-focus-management-modal"
      >
        Or Post A Tweet As New Author
      </button>

      <div
        id="hs-focus-management-modal"
        className="hs-overlay hidden w-full h-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none"
      >
        <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
          <div className="flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
            <div className="flex justify-between items-center py-3 px-4 border-b dark:border-gray-700">
              <h3 className="font-bold text-gray-800 dark:text-white">
                Post a Tweet
              </h3>
              <button
                type="button"
                className="flex justify-center items-center w-7 h-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                data-hs-overlay="#hs-focus-management-modal"
                onClick={() => onCancel()}
              >
                <span className="sr-only">Close</span>
                <svg
                  className="flex-shrink-0 w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>
            <div className="text-left p-4 overflow-y-auto">
              <label
                htmlFor="input-label"
                className="block text-sm font-medium mb-2 dark:text-white"
              >
                Name
              </label>
              <input
                type="text"
                id="input-label"
                className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                placeholder="your name"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleOnInputChange(e)
                }
                autoFocus
              ></input>
            </div>
            <div className="text-left p-4 overflow-y-auto">
              <label
                htmlFor="input-label"
                className="block text-sm font-medium mb-2 dark:text-white"
              >
                Content
              </label>
              <textarea
                id="textarea-label"
                className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                rows={3}
                placeholder="What is happening?"
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                  handleOnChange(e)
                }
                value={content}
              ></textarea>
            </div>
            <div className="flex justify-end items-center gap-x-2 py-3 px-4 border-t dark:border-gray-700">
              <button
                type="button"
                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                data-hs-overlay="#hs-focus-management-modal"
                onClick={() => onCancel()}
              >
                Cancel
              </button>
              <button
                type="button"
                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                data-hs-overlay="#hs-focus-management-modal"
                onClick={() => createTweet()}
              >
                Post
              </button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <ToastContainer />
      </div>
    </>
  );
};

export default TweetInput;
