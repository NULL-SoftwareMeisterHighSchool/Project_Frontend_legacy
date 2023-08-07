import AppLayout from "@layouts/AppLayout";
import * as S from "./style";
import SearchFilter from "@components/pages/SkillBlog/SearchFilter";
import skilldata from "@fixtures/skillBoard.json";
import BlogPost from "@components/pages/SkillBlog/BlogPost";
import { SkillBlogDefaultImg } from "@assets/images/allfiles";
import TitlePath from "@components/common/TitlePath";

const SkillBlog = () => {
    /** skill blog 데이터 */
    const [skillData, setSkillData] = useState<skillDataProps>({
        article: [],
        total: 0,
    });
    /** 검색어 */
    const [searchInput, setSearchInput] = useState<string>("");
    /** 필터 */
    const [filterData, setFilterData] = useState("최신순");

    /** axios 연동 함수 */
    const getSkillData = (newData?: boolean) => {
        if (newData) {
            getBlog({
                type: "TECH",
                offset: skillData.article.length,
                limit: 20,
                order:
                    filterData === "최신순"
                        ? "TIME"
                        : filterData === "최신순"
                        ? "VIEWS"
                        : "LIKES",
                setData: setSkillData,
                query: searchInput,
                data: skillData,
            });
        } else {
            getBlog({
                type: "TECH",
                offset: 0,
                limit: 20,
                order:
                    filterData === "최신순"
                        ? "TIME"
                        : filterData === "최신순"
                        ? "VIEWS"
                        : "LIKES",
                setData: setSkillData,
                data: skillData,
                query: searchInput,
            });
        }
    };

    /** 필터 변경시 데이터 받아오기 */
    useEffect(() => {
        getSkillData();
    }, [filterData]);

    useEffect(() => {
        getSkillData(true);
    }, []);

    const [ref, inView] = useInView();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (inView && !loading) {
            setLoading(true);
            getSkillData();
            setLoading(false);
        }
    }, [inView]);
    return (
        <>
            <TitlePath title="기술 블로그" path="Menu > 기술블로그" />
            <S.MainContainer>
                <SearchFilter />
                <S.BlogContainer>
                    {blogData.map((data) => (
                        <BlogPost
                            key={data.id}
                            id={data.id}
                            name={data.name}
                            summary={data.summary}
                            titleImg={data.titleImg ?? SkillBlogDefaultImg}
                            date={data.date}
                        />
                    ))}
                </S.BlogContainer>
            </S.MainContainer>
        </>
    );
};

export default SkillBlog;
