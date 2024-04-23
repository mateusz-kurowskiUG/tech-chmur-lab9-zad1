import axios from "axios";

const healthCheck = async () => {
  try {
    const response = await axios.get("http://localhost:3000/health");
    console.log("Health check response: ", response.data);
    console.log(response.data);
    console.log("OK");
    process.exit(0);
    
  } catch (error) {
    console.error("ERROR!");
    console.error(error);
    process.exit(1);
  }
};

healthCheck();