import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';

type Props = {
    content?: string;
};
  

const Toast = ({ content }:Props) => {
    return ( 
      <Editor 
        initialValue={content ?? '# 제목\n 내용을 입력해주세요.'}
        previewStyle="vertical"
        initialEditType='markdown'
        autofocus={true}
        hideModeSwitch
        height='90vh'
      />
    );
}
 
export default Toast;