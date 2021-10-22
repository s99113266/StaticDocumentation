function RemindEstablish(e, types = 0) { ///產生提醒視窗 RemindEstablish("字串", 數值 0 或 1 = 出現NO的按鈕)
    let RemindHTML, RemindObj, RemindButtonNO;
    RemindButtonNO = "";
    if (types == 1) {
        RemindButtonNO = `<div class="RemindNO pos_r flexNone">
                                        <div class="pos_a dpflex jfc_center ai_center c_pointer"><ion-icon name="close"></ion-icon></div>
                                    </div>`;
    }
    RemindHTML = `    <div class="Remind pos_f FDColumn">
                                    <div class="RemindContent flex_1 FDColumn">
                                        <div class="RemindText flex_1 FDColumn ovf_auto">
                                            <div class="flex_1 dpflex jfc_center ai_center ovf_auto">${e}</div>
                                        </div>
                                        <div class="RemindButton flexNone FDRow">
                                            <div class="RemindOK pos_r flex_1">
                                                <div class="pos_a dpflex jfc_center ai_center c_pointer"><ion-icon name="checkmark"></ion-icon></div>
                                            </div>
                                            ${RemindButtonNO}
                                        </div>
                                    </div>
                                </div>`;
    RemindObj = Doc.createElement("div");
    RemindObj.classList = "RemindBackground pos_f";
    RemindObj.innerHTML = RemindHTML;
    Doc.body.appendChild(RemindObj);
    return new Promise(function (resolve, reject) {
        Doc.querySelectorAll(".RemindOK")[0].onclick = function () {
            RemindObj.remove();
            resolve(0);
        }
        if (types == 1) {
            Doc.querySelectorAll(".RemindNO")[0].onclick = function () {
                RemindObj.remove();
                resolve(1);
            }
        }
    });
}