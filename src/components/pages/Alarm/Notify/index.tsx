import * as S from './style';
import Peofile from  '@assets/images/Alarm.png'

export interface NotifyPropTypes {
    id : number;
    to : string;
    title : string;
    date : string;
    time : string;
    width? : string;
}

const Notify = ({ id, to, title, date, time, width = '1280px' }: NotifyPropTypes) => {
 return(
    <S.Notify key={id} to={to} width = {width} >
        <S.Profile src={Peofile}/>
        <S.NotifyInfo>
            <S.Title>{title}</S.Title>
            <S.TimeInfo>
                {date}
                {' | '}
                {time}
            </S.TimeInfo>
        </S.NotifyInfo>
    </S.Notify>
 );
}

export default Notify; 