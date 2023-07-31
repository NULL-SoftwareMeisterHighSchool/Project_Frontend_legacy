import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import "@toast-ui/editor/dist/i18n/ko-kr";
import { useRef } from "react";

type Props = {
    content: string;
    setContent: React.Dispatch<React.SetStateAction<string>>;
};

const Toast = ({ content, setContent }: Props) => {
    const editorRef = useRef(null);

    const onChange = () => {
        /** error : 'editorRef.current'은(는) 'null'일 수 있습니다. 발샹 */
        setContent(editorRef.current.getInstance().getMarkdown())
    };
    return (
        <Editor
            initialValue={
                content ?? "## 내용을 입력해주세요.\n이것은 내용입니다. 호호호"
            }
            onChange={onChange}
            ref={editorRef}
            previewStyle="vertical"
            initialEditType="markdown"
            autofocus={true}
            hideModeSwitch={true}
            language="ko-KR"
            height="calc(100vh - 190px)"
        />
    );
};

export default Toast;
