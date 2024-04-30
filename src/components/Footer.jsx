import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Footer() {
  return (
    <div id="footer" className="text-gray-300 text-sm pb-4">
      <div className="flex gap-x-8 justify-center mb-8">
        <a
          href="https://www.linkedin.com/in/foti-ceci/"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer transition ease-in-out hover:-translate-y-1 hover:-translate-x-1 hover:shadow-custom rounded"
        >
          <LinkedInIcon
            style={{
              fill: "white",
              width: "1.75rem",
              height: "auto",
              cursor: "pointer",
            }}
          />
        </a>
        <a
          href="https://github.com/fotinh0"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer transition ease-in-out hover:-translate-y-1 hover:-translate-x-1 hover:shadow-custom rounded-2xl"
        >
          <GitHubIcon
            style={{
              fill: "white",
              width: "1.75rem",
              height: "auto",
              cursor: "pointer",
            }}
          />
        </a>
      </div>
      <a
        href="https://github.com/fotinh0/foti-ceci-portfolio"
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-pointer"
      >
        © 2024 Built by Foti Ceci.
      </a>
    </div>
  );
}
