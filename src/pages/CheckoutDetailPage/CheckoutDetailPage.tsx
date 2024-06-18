import { useTranslation } from "react-i18next";
import CheckoutData from "../../entities/Checkout";
import moment from "moment";
interface Props {
  checkoutDetail: CheckoutData | undefined;
}

const CheckoutDetailPage = ({ checkoutDetail }: Props) => {
  const txnDateTime = moment(checkoutDetail?.transactionDate).format(
    "DD-MMMM-YYYY h:mm"
  );
  const { t } = useTranslation();
  return (
    <div className="col-md-6 text-center">
      <div className="row">
        <div className="col-md-11 card mb-0 border-0">
          <div className="card-body p-0">
            <img
              className="mb-3"
              src="./images/logo/edc_new_img.png"
              width={"90"}
              height={"90"}
              alt=""
            />

            <p
              className="text-center"
              style={{ fontSize: "19px", fontWeight: "normal" }}
            >
              {checkoutDetail?.merchantNameKh}
            </p>
            <p
              className="text-center "
              style={{ fontSize: "19px", fontWeight: "normal" }}
            >
              {checkoutDetail?.merchantName}
            </p>

            <div className="table-responsive">
              <table className="tableDetail">
                <tbody>
                  <tr>
                    <th className="headerRow">
                      {t("detailInfo.payTo")}
                    </th>
                    <td className="valueDetail ">
                      {checkoutDetail?.merchantName}
                    </td>
                  </tr>
                  <tr>
                    <th className="headerRow">
                    {t("detailInfo.orderDate")}
                    </th>
                    <td className="valueDetail ">{txnDateTime}</td>
                  </tr>
                  <tr>
                    <th className="headerRow">
                    {t("detailInfo.orderId")}
                    </th>
                    <td className="valueDetail ">
                      {checkoutDetail?.edcTransactionId}
                    </td>
                  </tr>
                  <tr>
                    <th className="headerRow">
                    {t("detailInfo.amount")}
                    </th>
                    <td className="valueDetail ">
                      {checkoutDetail?.transactionAmount}&nbsp;
                      {checkoutDetail?.transactionCurrency}
                    </td>
                  </tr>
                  <tr>
                    <th className="headerRow">{t("detailInfo.fee")}</th>
                    <td className="valueDetail">{checkoutDetail?.transactionFeeAmount}&nbsp;{checkoutDetail?.transactionCurrency}</td>
                  </tr>
                  <tr className="border-bottom p-5"></tr>
                  <tr>
                    <th className="headerRowFooter">
                    {t("detailInfo.total")}
                    </th>
                    <td className="valueDetailFooter">{checkoutDetail?.totalAmount}&nbsp;
                      {checkoutDetail?.transactionCurrency}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="col-md-1 border-end "></div>
      </div>
    </div>
  );
};

export default CheckoutDetailPage;
