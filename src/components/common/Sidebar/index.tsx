import * as S from './style';
import * as I from '@assets/images/allfiles';

export const Sidebar = () => {
	return (
		<S.Fixed>
			<S.Bar>
				<S.User>
					<img src={I.UserImg} alt="유저사진" />
					<span>UserName</span>
				</S.User>
				<S.Line />
				<S.Menu>
					<S.Subtitle>Menu</S.Subtitle>
					<S.Option to="/">
						<S.Icon src={I.Menu} alt="메인아이콘" />
						<S.PageName>메인</S.PageName>
					</S.Option>
					<S.Option to="">
						<S.Icon src={I.BulletinBoard} alt="게시판아이콘" />
						<S.PageName>게시판</S.PageName>
					</S.Option>
					<S.Option to="">
						<S.Icon src={I.Computer} alt="칠판아이콘" />
						<S.PageName>기술 블로그</S.PageName>
					</S.Option>
					<S.Option to="">
						<S.Icon src={I.Trophy} alt="랭킹 아이콘" />
						<S.PageName>랭킹</S.PageName>
					</S.Option>
				</S.Menu>
				<S.Menu>
					<S.Subtitle>User</S.Subtitle>
					<S.Option to="">
						<S.Icon src={I.Alarm} alt="알람 아이콘" />
						<S.PageName>알람</S.PageName>
					</S.Option>
					<S.Option to="">
						<S.Icon src={I.UserIcon} alt="마이페이지 아이콘" />
						<S.PageName>마이페이지</S.PageName>
					</S.Option>
					<S.Option to="">
						<S.Icon src={I.Setting} alt="설정 아이콘" />
						<S.PageName>설정</S.PageName>
					</S.Option>
					<S.Option to="">
						<S.Icon src={I.Infomation} alt="소개 아이콘" />
						<S.PageName>개발자 소개</S.PageName>
					</S.Option>
				</S.Menu>
			</S.Bar>
		</S.Fixed>
	);
};
