import * as S from './style';
import * as I from '@assets/images/allfiles';

import { color } from '@styles/theme.style';

import { Option } from './Option';

import { Menu } from '@assets/images/icon/Menu';
import { BulletinBoard } from '@assets/images/icon/BulletinBoard';
import { Computer } from '@assets/images/icon/Computer';
import { Trophy } from '@assets/images/icon/Trophy';
import { Alarm } from '@assets/images/icon/Alarm';
import { User } from '@assets/images/icon/User';
import { Setting } from '@assets/images/icon/Setting';
import { Infomation } from '@assets/images/icon/Infomation';
import { Edit } from '@assets/images/icon/Edit';
import WritePopUp from '@components/common/WritePopUp';

import { SetStateAction, useCallback, useState } from 'react';

export const Sidebar = () => {
	const [category, setCategory] = useState('all');
	const [showPopUp, setShowPopUp] = useState<boolean>(false);
	const onSelect = useCallback((category: SetStateAction<string>) => setCategory(category), []);

	return (
		<>
			<S.Bar>
				<S.User>
					<img src={I.UserImg} alt="유저사진" />
					<span>UserName</span>
				</S.User>
				<S.Line />
				<S.Write onClick={() => setShowPopUp(true)}>
					<Edit width={24} fill={color.grayDark1} />
					<S.WriteText>글쓰기</S.WriteText>
				</S.Write>
				<S.Menu>
					<S.Subtitle>Menu</S.Subtitle>
					<Option to='/' pagename='메인' category={category} onSelect={onSelect} ><Menu width={24} fill={color.white} /></Option>
					<Option to='/' pagename='게시판' category={category} onSelect={onSelect}><BulletinBoard width={24} /></Option>
					<Option to='/' pagename='기술 블로그' category={category} onSelect={onSelect}><Computer width={24} /></Option>
					<Option to='/' pagename='랭킹' category={category} onSelect={onSelect}><Trophy width={24} /></Option>
				</S.Menu>
				<S.Menu>
					<S.Subtitle>User</S.Subtitle>
					<Option to='/' pagename='알림' category={category} onSelect={onSelect}><Alarm width={24} /></Option>
					<Option to='/' pagename='마이페이지' category={category} onSelect={onSelect}><User width={24} /></Option>
					<Option to='/' pagename='설정' category={category} onSelect={onSelect}><Setting width={24} /></Option>
					<Option to='/' pagename='개발자 소개' category={category} onSelect={onSelect}><Infomation width={24} /></Option>
				</S.Menu>
			</S.Bar>
			{
            	showPopUp ? <WritePopUp setShowPopUp={setShowPopUp} /> : null
        	}
		</>
	);
};
