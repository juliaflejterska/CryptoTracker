import ChooseCrypto from "../components/ChooseCrypto";
import CryptoList from "../components/CryptoList";

const CryptoListPage = () => {
  return (
    <div className="crypto_list_page_container">
      <ChooseCrypto />
      <CryptoList />
    </div>
  );
};

export default CryptoListPage;
