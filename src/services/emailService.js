import axios from "axios";

const service = {
  async verify(email) {
    try {
      const data = await axios.get(
        "https://api.eva.pingutil.com/email?email=" + email
      );
      return [data, null];
    } catch (error) {
      return [null, error];
    }
  },
};

export default service;
