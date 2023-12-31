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
import { Checkbox } from 'primereact/checkbox';
import { BreadCrumb } from "../../../shares/BreadCrumb";
import { userPayload } from "../userPayload";

export const UserCreate = () => {
  const [loading, setLoading] = useState(false);
  const [payload, setPayload] = useState(userPayload.store);

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
            title={'User Create'}
            subTitle={'User is a purposing for web management'}
          >
            <div className=" grid">

              <div className=" col-12 md:col-6 lg:col-4 my-3">
                <div className="flex flex-column">
                  <label htmlFor="name" className=" text-black">
                    Name (required)
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
                    Email (required)
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
                    Phone (required)
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
                    Password (required)
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

                    tabIndex={1}
                  />
                  <ValidationMessage field={"password"} />
                </div>
              </div>

              <div className=" col-12 md:col-6 lg:col-4 py-3">
                <div className="flex flex-column gap-2">
                  <label htmlFor="con_password" className=" text-black">
                    Confirm Password (required)
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

              <div className=" col-12 md:col-6 lg:col-4 py-3">
                <div className="flex flex-column gap-2">
                  <label htmlFor="jd" className=" text-black">
                    Job Description (required)
                  </label>
                  <InputText
                    className="p-inputtext-sm text-black"
                    id={'jd'}
                    name={"jd"}
                    tooltip="Jod description for user"
                    tooltipOptions={{ ...tooltipOptions }}
                    disabled={loading}
                    onChange={(e) =>
                      payloadHandler(
                        payload,
                        e.target.value,
                        "jd",
                        (updateValue) => {
                          setPayload(updateValue);
                        }
                      )
                    }

                    tabIndex={1}
                  />
                  <ValidationMessage field={"jd"} />
                </div>
              </div>

              <div className=" col-12 md:col-6 lg:col-4 py-3">
                <div className="flex flex-column gap-2">
                  <label htmlFor="role" className=" text-black">
                    Role (required)
                  </label>
                  <InputText
                    className="p-inputtext-sm text-black"
                    id={'role'}
                    name={"role"}
                    tooltip="Role for user"
                    tooltipOptions={{ ...tooltipOptions }}
                    disabled={loading}
                    onChange={(e) =>
                      payloadHandler(
                        payload,
                        e.target.value,
                        "role",
                        (updateValue) => {
                          setPayload(updateValue);
                        }
                      )
                    }

                    tabIndex={1}
                  />
                  <ValidationMessage field={"role"} />
                </div>
              </div>

              <div className=" col-12 md:col-6 lg:col-4 my-3 md:my-0">
                <div className="flex flex-column gap-2">
                  <label htmlFor="agree" className=" text-black">
                    Agree
                  </label>
                  <Checkbox
                    className="p-inputtext-sm text-black"
                    inputId="agree"
                    name="agree"
                    autoComplete="out of stock"
                    aria-describedby="out_of_stock-help"
                    tooltip="Agree for user privacy"
                    tooltipOptions={{ ...tooltipOptions }}
                    placeholder="Enter item sell price"
                    disabled={loading}
                    checked={payload.agree ? payload.agree : false}
                    onChange={(e) =>
                      payloadHandler(
                        payload,
                        e.checked,
                        "agree",
                        (updateValue) => {
                          setPayload(updateValue);
                        }
                      )
                    }
                  />
                  <ValidationMessage field={"agree"} />
                </div>
              </div>

              <div className=" col-12 md:col-6 lg:col-4 py-3">
                <div className="flex flex-column gap-2">
                  <label htmlFor="position" className=" text-black">
                    Position (required)
                  </label>
                  <InputText
                    className="p-inputtext-sm text-black"
                    id="position"
                    name={"position"}
                    tooltip="Position for user"
                    tooltipOptions={{ ...tooltipOptions }}
                    disabled={loading}
                    onChange={(e) =>
                      payloadHandler(
                        payload,
                        e.target.value,
                        "role",
                        (updateValue) => {
                          setPayload(updateValue);
                        }
                      )
                    }

                    tabIndex={1}
                  />
                  <ValidationMessage field={"position"} />
                </div>
              </div>

              <div className=" col-12 md:col-6 lg:col-4 py-3">
                <div className="flex flex-column gap-2">
                  <label htmlFor="annual" className=" text-black">
                    Annual Leave (required)
                  </label>
                  <InputText
                    className="p-inputtext-sm text-black"
                    id={'annual'}
                    name={"annual"}
                    tooltip="Annual leave for user"
                    tooltipOptions={{ ...tooltipOptions }}
                    disabled={loading}
                    onChange={(e) =>
                      payloadHandler(
                        payload,
                        e.target.value,
                        "annual_leave",
                        (updateValue) => {
                          setPayload(updateValue);
                        }
                      )
                    }

                    tabIndex={1}
                  />
                  <ValidationMessage field={"annual_leave"} />
                </div>
              </div>

              <div className=" col-12 md:col-6 lg:col-4 py-3">
                <div className="flex flex-column gap-2">
                  <label htmlFor="casual" className=" text-black">
                    Casual Leave (required)
                  </label>
                  <InputText
                    className="p-inputtext-sm text-black"
                    id={'casual'}
                    name={"casual"}
                    tooltip="Casual leave for user"
                    tooltipOptions={{ ...tooltipOptions }}
                    disabled={loading}
                    onChange={(e) =>
                      payloadHandler(
                        payload,
                        e.target.value,
                        "casual_leave",
                        (updateValue) => {
                          setPayload(updateValue);
                        }
                      )
                    }

                    tabIndex={1}
                  />
                  <ValidationMessage field={"casual_leave"} />
                </div>
              </div>

              <div className=" col-12 md:col-6 lg:col-4 py-3">
                <div className="flex flex-column gap-2">
                  <label htmlFor="probation" className=" text-black">
                    Probation Leave (required)
                  </label>
                  <InputText
                    className="p-inputtext-sm text-black"
                    id={'probation'}
                    name={"probation"}
                    tooltip="Probation leave for user"
                    tooltipOptions={{ ...tooltipOptions }}
                    disabled={loading}
                    onChange={(e) =>
                      payloadHandler(
                        payload,
                        e.target.value,
                        "probation_leave",
                        (updateValue) => {
                          setPayload(updateValue);
                        }
                      )
                    }

                    tabIndex={1}
                  />
                  <ValidationMessage field={"probation_leave"} />
                </div>
              </div>

              <div className=" col-12 md:col-6 lg:col-4 py-3">
                <div className="flex flex-column gap-2">
                  <label htmlFor="unpaid" className=" text-black">
                    Unpaid Leave (required)
                  </label>
                  <InputText
                    className="p-inputtext-sm text-black"
                    id={'unpaid'}
                    name={"unpaid_leave"}
                    tooltip="Unpaid leave for user"
                    tooltipOptions={{ ...tooltipOptions }}
                    disabled={loading}
                    onChange={(e) =>
                      payloadHandler(
                        payload,
                        e.target.value,
                        "unpaid_leave",
                        (updateValue) => {
                          setPayload(updateValue);
                        }
                      )
                    }

                    tabIndex={1}
                  />
                  <ValidationMessage field={"unpaid_leave"} />
                </div>
              </div>

              <div className=" md:col-12 mx-2 md:mx-0 my-3">
                <div className=" flex align-items-center justify-content-end">
                  <div className=" flex align-items-center justify-content-between gap-3">
                    <Button
                      label='CANCEL'
                      severity="secondary"
                      outlined
                      size="small"
                      onClick={() => navigate(paths.user)}
                    />

                    <Button
                      severity="danger"
                      size="small"
                      disabled={loading}
                      label="SUBMIT"
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
