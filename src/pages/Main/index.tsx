import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Sidebar } from '@components/pages/Sidebar';
import Button from '@components/common/Button/index';
import Dummy from "@fixtures/board.json";
import * as S from './style';

const Main = () => {
	return (
		<div>
			<Sidebar />
			<S.Maincontainer>
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
							<S.Circulartext>
								<S.Scoretitle>Text.User&apos;s</S.Scoretitle>
								<S.Scoresubtitle>Github Stats</S.Scoresubtitle>
							</S.Circulartext>
					</S.Score>
					<S.comprehensive>
						<S.Record>
							<S.Recordtitle>Total Stars Earned</S.Recordtitle>
							<S.Recordscore>0</S.Recordscore>
						</S.Record>
						<S.Record>
							<S.Recordtitle>Total Commits</S.Recordtitle>
							<S.Recordscore>120</S.Recordscore>
						</S.Record>
						<S.Record>
							<S.Recordtitle>Total PRs</S.Recordtitle>
							<S.Recordscore>12</S.Recordscore>
						</S.Record>
						<S.Record>
							<S.Recordtitle>Total Issues</S.Recordtitle>
							<S.Recordscore>0</S.Recordscore>
						</S.Record>
						<S.Record>
							<S.Recordtitle>Contributed to</S.Recordtitle>
							<S.Recordscore>10</S.Recordscore>
						</S.Record>
					</S.comprehensive>
				</S.Github>
				<S.Twobanner>
					<S.Banner>
						<S.Bannertext>
							<S.Bannertitle>인기 게시글</S.Bannertitle>
							<S.Bannersubtitle>인기 있는 게시글을 만나보세요</S.Bannersubtitle>
						</S.Bannertext>
						<Button width='116px' height='48px' value='게시글 더보기'></Button>
					</S.Banner>
					<S.Banner>
						<S.Bannertext>
							<S.Bannertitle>기술 블로그</S.Bannertitle>
							<S.Bannersubtitle>전공 지식을 습득해 보세요</S.Bannersubtitle>
						</S.Bannertext>
						<Button width='104px' height='48px' value='기술 더보기'></Button>
					</S.Banner>
				</S.Twobanner>
				<S.Twoboard>
					<S.Board>
					{
							Dummy.post.map(
								post => (
									<S.Post key={post.id} to="/">
										<S.Posttitle>{post.title}</S.Posttitle>
										<S.Postnamedate>
											<S.Postname>{post.name}</S.Postname>
											<S.Postdate>{post.date}</S.Postdate>
										</S.Postnamedate>
									</S.Post>
								)
							)
					}
					</S.Board>
					<S.Board>
					{
							Dummy.post.map(
								post => (
									<S.Post key={post.id} to="/">
										<S.Posttitle>{post.title}</S.Posttitle>
										<S.Postnamedate>
											<S.Postname>{post.name}</S.Postname>
											<S.Postdate>{post.date}</S.Postdate>
										</S.Postnamedate>
									</S.Post>
								)
							)
					}
					</S.Board>
				</S.Twoboard>
			</S.Maincontainer>
		</div>
	);
};

export default Main;
