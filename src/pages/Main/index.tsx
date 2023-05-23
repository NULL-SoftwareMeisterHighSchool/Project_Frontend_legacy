import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import Post from '@components/common/Post';
import Banner from '@components/pages/Main/Banner';
import Record from '@components/pages/Main/Record';
import { Sidebar } from '@components/common/Sidebar';
import Button from '@components/common/Button/index';
import Dummy from "@fixtures/board.json";
import * as S from './style';

const Main = () => {
	return (
		<div>
			<Sidebar />
			<S.MainContainer>
				<S.Path>Menu {'>'} 메인</S.Path>
				<S.Title>메인</S.Title>
				<S.Github>
					<S.Score>
						<CircularProgressbarWithChildren
							value={69}
							text="A+"
							styles={buildStyles({
								// Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
								strokeLinecap: 'butt',

								// How long animation takes to go from one percentage to another, in seconds
								pathTransitionDuration: 0.5,

								// Colors
								pathColor: `rgba(0, 132, 219)`,
								trailColor: '#EFF4F4',
								backgroundColor: '#3e98c7',
							})}
						/>
						<S.CircularText>
							<S.ScoreTitle>Text.User&apos;s</S.ScoreTitle>
							<S.ScoreSubtitle>Github Stats</S.ScoreSubtitle>
						</S.CircularText>
					</S.Score>
					<S.Comprehensive>
						<Record title='Total Stars Earned' score='0' />
						<Record title='Total Commits' score='120' />
						<Record title='Total PRs' score='12' />
						<Record title='Total Issues' score='0' />
						<Record title='Contributed to' score='10' />
					</S.Comprehensive>
				</S.Github>
				<S.BannerArea>
					<Banner title='인기 게시글' subtitle='인기있는 게시글을 만나보세요' buttonValue='게시글 더보기' />
					<Banner title='기술 블로그' subtitle='전공 지식을 습득해 보세요' buttonValue='기술 더보기' />
				</S.BannerArea>
				<S.BoardArea>
					<S.Board>
						{
							Dummy.post.map(
								post => (
									<Post id={post.id} title={post.title} name={post.name} date={post.date} to='' />
								)
							)
						}
					</S.Board>
					<S.Board>
						{
							Dummy.post.map(
								post => (
									<Post id={post.id} title={post.title} name={post.name} date={post.date} to='' />
								)
							)
						}
					</S.Board>
				</S.BoardArea>
			</S.MainContainer>
		</div>
	);
};

export default Main;
