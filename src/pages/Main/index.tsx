import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
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
						<S.Record>
							<S.RecordTitle>Total Stars Earned</S.RecordTitle>
							<S.RecordScore>0</S.RecordScore>
						</S.Record>
						<S.Record>
							<S.RecordTitle>Total Commits</S.RecordTitle>
							<S.RecordScore>120</S.RecordScore>
						</S.Record>
						<S.Record>
							<S.RecordTitle>Total PRs</S.RecordTitle>
							<S.RecordScore>12</S.RecordScore>
						</S.Record>
						<S.Record>
							<S.RecordTitle>Total Issues</S.RecordTitle>
							<S.RecordScore>0</S.RecordScore>
						</S.Record>
						<S.Record>
							<S.RecordTitle>Contributed to</S.RecordTitle>
							<S.RecordScore>10</S.RecordScore>
						</S.Record>
					</S.Comprehensive>
				</S.Github>
				<S.BannerArea>
					<S.Banner>
						<S.BannerText>
							<S.BannerTitle>인기 게시글</S.BannerTitle>
							<S.BannerSubtitle>인기 있는 게시글을 만나보세요</S.BannerSubtitle>
						</S.BannerText>
						<Button width='116px' height='48px' value='게시글 더보기'></Button>
					</S.Banner>
					<S.Banner>
						<S.BannerText>
							<S.BannerTitle>기술 블로그</S.BannerTitle>
							<S.BannerSubtitle>전공 지식을 습득해 보세요</S.BannerSubtitle>
						</S.BannerText>
						<Button width='104px' height='48px' value='기술 더보기'></Button>
					</S.Banner>
				</S.BannerArea>
				<S.BoardArea>
					<S.Board>
					{
							Dummy.post.map(
								post => (
									<S.Post key={post.id} to="/">
										<S.PostTitle>{post.title}</S.PostTitle>
										<S.PostInfo>
											<S.PostName>{post.name}</S.PostName>
											<S.PostDate>{post.date}</S.PostDate>
										</S.PostInfo>
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
										<S.PostTitle>{post.title}</S.PostTitle>
										<S.PostInfo>
											<S.PostName>{post.name}</S.PostName>
											<S.PostDate>{post.date}</S.PostDate>
										</S.PostInfo>
									</S.Post>
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
