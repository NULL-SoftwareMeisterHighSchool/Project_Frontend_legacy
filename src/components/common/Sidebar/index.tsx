import * as S from './style';
import * as I from '@assets/images/allfiles';

import { Option } from './Option';

import { Menu } from '@assets/images/icon/Menu';
import { BulletinBoard } from '@assets/images/icon/BulletinBoard';
import { Computer } from '@assets/images/icon/Computer';
import { Trophy } from '@assets/images/icon/Trophy';
import { Alarm } from '@assets/images/icon/Alarm';
import { User } from '@assets/images/icon/User';
import { Setting } from '@assets/images/icon/Setting';
import { Infomation } from '@assets/images/icon/Infomation';

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
				<Option to='/' pagename='메인' ><Menu width={24}/></Option>
				<Option to='/' pagename='게시판' ><BulletinBoard width={24}/></Option>
				<Option to='/' pagename='기술 블로그' ><Computer width={24}/></Option>
				<Option to='/' pagename='랭킹' ><Trophy width={24}/></Option>
			</S.Menu>
			<S.Menu>
				<S.Subtitle>User</S.Subtitle>
				<Option to='/' pagename='알림' ><Alarm width={24}/></Option>
				<Option to='/' pagename='마이페이지' ><User width={24}/></Option>
				<Option to='/' pagename='설정' ><Setting width={24}/></Option>
				<Option to='/' pagename='개발자 소개' ><Infomation width={24}/></Option>
			</S.Menu>
		</S.Bar>
	);
};
