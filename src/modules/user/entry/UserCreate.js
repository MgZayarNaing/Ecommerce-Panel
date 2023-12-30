import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { paths } from "../../../constants/paths";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userService } from "../userService";
import { ValidationMessage } from "../../../shares/ValidationMessage";
import { payloadHandler } from "../../../helpers/handler";
import { tooltipOptions } from "../../../constants/config";
import { Avatar } from "primereact/avatar";
import { BreadCrumb } from "../../../shares/BreadCrumb";

export const UserCreate = () => {
  const [loading, setLoading] = useState(false);
  const [payload, setPayload] = useState({
    name: "",
    profile: "",
    email: "",
    phone: "",
    password: "",
    confirm_password: "",
  });

  const { translate } = useSelector(state => state.setting);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  /**
   * User Create
   * Payload - [name,profile,email,phone,password,confirm_password]
   * @returns
   * **/
  const submitUser = async () => {
    setLoading(true);
    await userService.store(payload, dispatch);

    setLoading(false);
  };

  return (
    <>
      <div className=" grid">
        <div className="col-12">
          <BreadCrumb />
        </div>

        <div className=" col-12">
          <Card
            title={translate.user_create}
            subTitle={translate.user_subtitle}
          >
            <div className=" grid">
              <div className=" col-12 flex align-items-center justify-content-center">
                <form>
                  <Avatar
                    icon="pi pi-user"
                    size="xlarge"
                    shape="circle"
                    onClick={() => {
                      document.getElementById("profile").click();
                    }}
                  />
                  <input id="profile" type="file" className=" hidden" />
                </form>
              </div>

              <div className=" col-12 md:col-6 lg:col-4 my-3">
                <div className="flex flex-column">
                  <label htmlFor="name" className=" text-black">
                    {translate.name} (required)
                  </label>
                  <InputText
                    className="p-inputtext-sm text-black"
                    id="name"
                    name={'name'}
                    autoComplete="User name"
                    aria-describedby="name-help"
                    tooltip="User full name"
                    tooltipOptions={{ ...tooltipOptions }}
                    placeholder="Enter user name"
                    disabled={loading}
                    onChange={(e) =>
                      payloadHandler(
                        payload,
                        e.target.value,
                        "name",
                        (updateValue) => {
                          setPayload(updateValue);
                        }
                      )
                    }
                  />
                  <ValidationMessage field={"name"} />
                </div>
              </div>

              <div className=" col-12 md:col-6 lg:col-4 py-3">
                <div className="flex flex-column gap-2">
                  <label htmlFor="email" className=" text-black">
                    {translate.email} (required)
                  </label>
                  <InputText
                    className="p-inputtext-sm text-black"
                    keyfilter={"email"}
                    id="email"
                    name="email"
                    autoComplete="User email"
                    aria-describedby="email-help"
                    tooltip="User email"
                    tooltipOptions={{ ...tooltipOptions }}
                    placeholder="Enter user email"
                    disabled={loading}
                    onChange={(e) =>
                      payloadHandler(
                        payload,
                        e.target.value,
                        "email",
                        (updateValue) => {
                          setPayload(updateValue);
                        }
                      )
                    }
                  />
                  <ValidationMessage field={"email"} />
                </div>
              </div>
              <div className=" col-12 md:col-6 lg:col-4 py-3">
                <div className="flex flex-column gap-2">
                  <label htmlFor="phone" className=" text-black">
                    {translate.phone} (required)
                  </label>
                  <InputText
                    className="p-inputtext-sm text-black"
                    keyfilter={"num"}
                    id="phone"
                    name="phone"
                    autoComplete="user phone"
                    aria-describedby="phone-help"
                    tooltip="User phone"
                    tooltipOptions={{ ...tooltipOptions }}
                    placeholder="Enter user phone"
                    disabled={loading}
                    onChange={(e) =>
                      payloadHandler(
                        payload,
                        e.target.value,
                        "phone",
                        (updateValue) => {
                          setPayload(updateValue);
                        }
                      )
                    }
                  />
                  <ValidationMessage field={"phone"} />
                </div>
              </div>

              <div className=" col-12 md:col-6 lg:col-4 py-3">
                <div className="flex flex-column gap-2">
                  <label htmlFor="password" className=" text-black">
                    {translate.password} (required)
                  </label>
                  <Password
                    className="p-inputtext-sm text-black"
                    inputId="password"
                    name={"password"}
                    tooltip="Password must be contain special chars"
                    tooltipOptions={{ ...tooltipOptions }}
                    disabled={loading}
                    onChange={(e) =>
                      payloadHandler(
                        payload,
                        e.target.value,
                        "password",
                        (updateValue) => {
                          setPayload(updateValue);
                        }
                      )
                    }
                    feedback={false}
                    tabIndex={1}
                  />
                  <ValidationMessage field={"password"} />
                </div>
              </div>
              <div className=" col-12 md:col-6 lg:col-4 py-3">
                <div className="flex flex-column gap-2">
                  <label htmlFor="con_password" className=" text-black">
                    {translate.con_password} (required)
                  </label>
                  <Password
                    className="p-inputtext-sm text-black"
                    inputId={'con_password'}
                    name={"con_password"}
                    tooltip="Confirm password must be same password"
                    tooltipOptions={{ ...tooltipOptions }}
                    disabled={loading}
                    onChange={(e) =>
                      payloadHandler(
                        payload,
                        e.target.value,
                        "confirm_password",
                        (updateValue) => {
                          setPayload(updateValue);
                        }
                      )
                    }
                    feedback={false}
                    tabIndex={1}
                  />
                  <ValidationMessage field={"confirm_password"} />
                </div>
              </div>

              <div className=" md:col-12 mx-2 md:mx-0 my-3">
                <div className=" flex align-items-center justify-content-end">
                  <div className=" flex align-items-center justify-content-between gap-3">
                    <Button
                      label={translate.cancel}
                      severity="secondary"
                      outlined
                      size="small"
                      onClick={() => navigate(paths.user)}
                    />

                    <Button
                      severity="danger"
                      size="small"
                      disabled={loading}
                      label={translate.submit}
                      onClick={() => submitUser()}
                    />
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};