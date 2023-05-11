import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from "@pages/Main/index";

function App() {
  return(
    <div className="App">
      <Router>
			<Routes>
				<Route path="/" element={<Main />} />
				{/* <Route path="/Postdetails/:title" element={<R.Postdetails />} />
				<Route path="/search/:result" element={<R.Search />} />
				<Route path="/Signup" element={<R.Signup />} />
				<Route path="/create" element={<R.Create />} />
				<Route path="/update/:title" element={<R.Update />} />
				<Route path="/mypage" element={<R.Mypage />} />
				<Route path="/user/:id" element={<R.User />} />
				<Route path="*" element={<R.NotFound />} /> */}
			</Routes>
		</Router>
    </div>
  ); 
}

export default App;
