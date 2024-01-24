import { useState } from "react";
import { deleteTweet, updateTweet } from "../../utils/apis";
import { formatDate } from "../../utils/helper";
import { faTrash, faPencilSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TweetCardProps } from "../../utils/interfaces";
import { deleteSuccess, editSuccess, fail } from "../../utils/toasts";

const TweetCard: React.FC<TweetCardProps> = ({
  id,
  author,
  content,
  createdAt,
  updatedAt,
  detectChange,
  setDetectChange,
}) => {
  const [editContent, setEditContent] = useState(false);
  const [updatedContent, setUpdatedContent] = useState(content);

  const handleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text: string = e.target.value;
    setUpdatedContent(text);
  };

  const editTweet = async () => {
    const body = {
      author: author,
      content: updatedContent,
    };
    const response = await updateTweet(id, body);
    if (response == "OK") {
      editSuccess();
      setEditContent(false);
      setDetectChange(!detectChange);
    } else {
      fail();
      setEditContent(false);
    }
  };

  const removeTweet = async () => {
    const response = await deleteTweet(id);
    if (response == "OK") {
      deleteSuccess();
      setDetectChange(!detectChange);
    } else {
      fail();
    }
  };

  return (
    <div className="border-b-2 p-2 my-2 relative">
      <div className="grid grid-cols-12 gap-0 mt-2 mb-2">
        <div className="col-span-1">
          <img
            className="inline-block h-[3.875rem] w-[3.875rem] rounded-full"
            src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg"
            alt="Image Description"
          ></img>
        </div>
        <div className="col-span-11 align-middle text-left">
          <div className="flex items-baseline gap-2">
            <h1 className="text-xl dark:text-white">{author}</h1>
            <h1 className="text-lg dark:text-gray-500">@{author}</h1>

            <h2 className="text-sm dark:text-white">
              posted@{formatDate(createdAt)}
            </h2>
            <h2 className="text-sm dark:text-white">
              edited@{formatDate(updatedAt)}
            </h2>
          </div>
          {editContent ? (
            <>
              <textarea
                id="textarea-label"
                className="py-3 px-4 block w-full rounded-lg text-sm bg-transparent focus:outline-none"
                rows={3}
                placeholder="What is happening?"
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                  handleOnChange(e)
                }
                value={updatedContent}
              ></textarea>

              <div className="text-right my-3">
                <button
                  onClick={() => setEditContent(false)}
                  className="bg-blue-500 px-2 py-1 rounded mb-2 disabled:bg-gray-500"
                  disabled={content == ""}
                >
                  Cancel
                </button>
                <button
                  onClick={() => editTweet()}
                  className="bg-blue-500 px-2 py-1 rounded mb-2 disabled:bg-gray-500 ml-4"
                  disabled={content == ""}
                >
                  Post
                </button>
              </div>
            </>
          ) : (
            <p className="dark:text-white">{updatedContent}</p>
          )}
        </div>
      </div>

      <div className="absolute top-2 right-0 flex align-middle gap-1">
        <FontAwesomeIcon
          icon={faPencilSquare}
          className="h-5 w-5 mr-2 cursor-pointer"
          onClick={() => setEditContent(true)}
        />

        <FontAwesomeIcon
          icon={faTrash}
          className="h-5 w-5 mr-2 cursor-pointer"
          onClick={() => removeTweet()}
        />
      </div>
    </div>
  );
};
export default TweetCard;
