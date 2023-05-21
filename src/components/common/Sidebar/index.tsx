import * as S from './style';
import * as I from '@assets/images/allfiles';
import { Option } from './Option';

export const Sidebar = () => {
	return (
		<S.Bar>
			<S.User>
				<img src={I.UserImg} alt="유저사진" />
				<span>UserName</span>
			</S.User>
			<S.Line />
			<S.Menu>
				<S.Subtitle>Menu</S.Subtitle>
				<Option to='/' src={I.Menu} pagename='메인'></Option>
				<Option to='/' src={I.BulletinBoard}  pagename='게시판'></Option>
				<Option to='/' src={I.Computer} pagename='기술 블로그'></Option>
				<Option to='/' src={I.Trophy}  pagename='랭킹'></Option>
			</S.Menu>
			<S.Menu>
				<S.Subtitle>User</S.Subtitle>
				<Option to='/' src={I.Alarm}  pagename='알림'></Option>
				<Option to='/' src={I.UserIcon}  pagename='마이페이지'></Option>
				<Option to='/' src={I.Setting}  pagename='설정'></Option>
				<Option to='/' src={I.Infomation}  pagename='개발자 소개'></Option>
			</S.Menu>
		</S.Bar>
	);
};
