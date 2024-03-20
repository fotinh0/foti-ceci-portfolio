import myData from "../myData.json";
import {
  ChevronDoubleRightIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/outline";

export default function Projects() {
  let projects = myData.projects;
  return (
    <div id="projects" className="pt-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Featured Projects
          </h2>
        </div>
        <div className="mx-auto mt-10  gap-x-8 gap-y-16 border-t border-gray-300 pt-10 sm:mt-16 flex flex-col sm:pt-16 lg:mx-20 lg:max-w-none">
          {projects.map((project, index) => {
            return (
              <div
                key={index}
                className="mx-auto max-w-2xl rounded-3xl ring-1 ring-gray-200 lg:mx-0 lg:flex lg:max-w-none"
              >
                <div className="p-8 sm:p-10 lg:flex-auto">
                  <h3 className="text-2xl font-bold gap-6 tracking-tight text-white flex items-center">
                    {project.title}{" "}
                    <a
                      href={project.projectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ArrowTopRightOnSquareIcon className="h-6 w-6 cursor-pointer transition ease-in-out hover:-translate-y-1 hover:-translate-x-1 hover:shadow-custom rounded" />
                    </a>
                  </h3>
                  <p className="mt-6 text-left text-sm leading-7 text-gray-300">
                    {project.descriptions}
                  </p>
                  <div className="mt-10 flex items-center gap-x-4">
                    <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">
                      Technologies
                    </h4>
                    <div className="h-px flex-auto bg-gray-300" />
                  </div>
                  <ul
                    role="list"
                    className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-300 sm:grid-cols-2 sm:gap-6"
                  >
                    {project.technologies.map((feature) => (
                      <li key={feature} className="flex gap-x-3">
                        <ChevronDoubleRightIcon
                          className="h-6 w-5 flex-none text-indigo-600"
                          aria-hidden="true"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-2 lg:w-full my-auto lg:max-w-md lg:flex-shrink-0">
                  <a
                    href={project.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="object-contain rounded-3xl"
                      src={project.imageUrl}
                    ></img>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
