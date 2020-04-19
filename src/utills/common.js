class Common {
	static IsNull = (data) => {
		if (data) return true;
		return false;
	};
	static ValidateEmail = (email) => {
		if (email !== "") {
			var filter = new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g); ///^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

			if (!filter.test(email)) return false;
			else return true;
		} else return false;
	};
}
export default Common;
