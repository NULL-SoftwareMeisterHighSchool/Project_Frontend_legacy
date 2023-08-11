import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import "@toast-ui/editor/dist/i18n/ko-kr";
import { useRef, useEffect } from "react";
import axios from "axios";
import { instance } from "@apis/index";

type Props = {
    content: string;
    setContent: React.Dispatch<React.SetStateAction<string>>;
};

type HookCallback = (url: string, text?: string) => void;

export type HookMap = {
    addImageBlobHook?: (blob: Blob | File, callback: HookCallback) => void;
  };

const BASE_URL = `${import.meta.env.VITE_BASEURL}/images`;

const Toast = ({ content, setContent }: Props) => {
    const editorRef = useRef<any>(null); //error해결을 위해 any 사용

    const onChange = () => {
        /** error : 'editorRef.current'은(는) 'null'일 수 있습니다. 발생 - 일단 해결*/
        setContent(editorRef.current.getInstance().getMarkdown())
    };

    return (
        <Editor
            initialValue={
                content ?? "## 내용을 입력해주세요."
            }
            // onChange={() => setContents(editorRef.current.getInstance().getHTML())}
            onChange={onChange}
            ref={editorRef}
            previewStyle="vertical"
            initialEditType="markdown"
            autofocus={true}
            hideModeSwitch={true}
            language="ko-KR"
            height="calc(100vh - 190px)"
            hooks={{
                addImageBlobHook: async (blob, callback) => {
                  try {
                    const imageData = new FormData();
                    const file = new File([blob], encodeURI(blob.name), {
                      type: blob.type,
                    });
                    imageData.append("image", file);
                    const response = await axios.post(`${BASE_URL}`, imageData, {
                        headers: {
                            "Content-Type": "multipart/form-data",
                        },
                        withCredentials: true,
                    });
                    const imageUrl = response.data.url;
                    callback(imageUrl, "image");
                  } catch (error) {
                    console.log(error);
                  }
                },
              }}
        />
    );
};

export default Toast;
