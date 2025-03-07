import { dialogActions, kindButtons } from "../../utils/GeneralVar";
import './ShowWarningDialog.scss';
import warningImg from '../../assets/images/site/warning.gif';
import { JSX } from "react";

export const ShowWarningDialog = (title: string, desc: JSX.Element, dialogAction: dialogActions, dialogButtons: kindButtons): JSX.Element => {

    return (
        <div className="dialogCustom dialogCustomError">
            <div className="dialogCustomMain">
                <h3 className="titleDialog">{title}</h3>
                <p className="descDialog">{desc} </p>
                {
                    dialogButtons === "YesNo" && (
                        <div className="btnsDialog">
                            <button className="btnDialog" onClick={() => dialogAction("yes")}>אשר</button>
                            <button className="btnDialog" onClick={() => dialogAction("no")}>בטל</button>
                        </div>
                    )
                }
                {
                    dialogButtons === "Ok" && (
                        <div className="btnsDialog">
                            <button className="btnDialog" onClick={() => dialogAction()}>אשר</button>
                        </div>
                    )
                }

                <div className="dialogBottom">
                    <img src={warningImg} alt="warning Img" className="dialogImg" />
                </div>
            </div>
        </div>
    )
}