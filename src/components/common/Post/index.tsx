import * as S from './style';

export interface PostPropTypes {
    id : number;
    to : string;
    title : string;
    name : string;
    date : string;
    width? : string;
    padding? : string|undefined;
}

const Post = ({ id, to, title, name, date, width = '620px', padding = '20px' }: PostPropTypes) => {
 return(
    <S.Post key={id} to={to} width = {width} padding={padding} >
        <S.PostTitle>{title}</S.PostTitle>
        <S.PostInfo>
            <S.PostName>{name}</S.PostName>
            <S.PostDate>{date}</S.PostDate>
        </S.PostInfo>
    </S.Post>
 );
}

export default Post; 