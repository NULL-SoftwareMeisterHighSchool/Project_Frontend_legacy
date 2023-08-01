import { Viewer } from '@toast-ui/react-editor';
import { useState } from 'react';

const View = () => {
    const [data, setdata] = useState({
        content: "이 바보야"
    });
    return ( 
        <Viewer initialValue={data.content} />
     );
}
 
export default View;