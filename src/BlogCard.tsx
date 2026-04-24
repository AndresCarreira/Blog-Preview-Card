import articleImage from "./assets/illustration-article.svg";
import avatarImage from "./assets/image-avatar.webp";

export default function BlogCard () {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#f4d04e] px-6">
      <article className="max-w-[384px] rounded-[20px] border border-black bg-white p-6 shadow-[8px_8px_0px_#000]">
        <img
          src={articleImage}
          alt="Article illustration"
          className="w-full rounded-[10px]"
        />

        <div className="mt-6">
          <span className="inline-block bg-[#f4d04e] text-black text-sm font-extrabold px-3 py-1 rounded-sm">
            Learning
          </span>

          <p className="text-[#111111] text-sm font-normal mt-3">
            Published 21 Dec 2023
          </p>

          <h1 className="text-black text-2xl font-extrabold mt-3 cursor-pointer transition-colors hover:text-[#f4d04e]">
            HTML & CSS foundations
          </h1>

          <p className="text-[#6b6b6b] text-base font-medium leading-normal mt-3">
            These languages are the backbone of every website, defining
            structure, content, and presentation.
          </p>

          <div className="flex items-center gap-3 mt-6">
            <img
              src={avatarImage}
              alt="Greg Hooper"
              className="h-8 w-8"
            />

            <p className="text-black text-sm font-extrabold">
              Greg Hooper
            </p>
          </div>
        </div>
      </article>
    </main>
  );
}