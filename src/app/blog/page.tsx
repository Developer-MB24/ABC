import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import Footer from "../components/Footer";
import Header from "../components/Header";

const BlogPage = () => {
  return (
    <>
      <Header />
      <div className="bg-gray-100">
        {/* Hero Section */}
        <div
          className="relative h-96 bg-cover bg-center flex items-center justify-center text-black"
          style={{ backgroundImage: "url('/images/hero1.avif')" }}
        >
          <div className="text-center">
            <h1 className="text-4xl font-bold">Blog Standard Left Sidebar</h1>
            <p className="text-lg mt-2">Strategy Planning</p>
            <div className="mt-4 border-t-4 border-yellow-500 w-16 mx-auto"></div>
          </div>
        </div>
        {/* 1st section  */}
        <div className=" p-4 w-full flex flex-col md:flex md:flex-row px-10">
          {/* left  */}
          <div className="w-full pt-4 md:w-1/3 md:p-5">
            <section className="mb-10">
              <h2 className="text-xl font-bold mb-4 text-black underline underline-offset-4 decoration-yellow-500">
                Recent Posts
              </h2>
              <div className="space-y-6">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="flex items-center">
                    <Image
                      src="/images/hero2.avif"
                      alt="Recent Post"
                      width={60}
                      height={60}
                      className="rounded-lg"
                    />
                    <div className="ml-4">
                      <Link
                        href="#"
                        className="text-lg font-semibold hover:text-blue-500 text-black"
                      >
                        Make it Simple
                      </Link>
                      <p className="text-black text-sm">Feb 23, 2016</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-bold mb-4 text-black underline underline-offset-4 decoration-yellow-500">
                Categories
              </h2>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="mr-2">&gt;</span>
                  <Link href="#" className="hover:text-yellow-500 text-black">
                    Competition (6)
                  </Link>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">&gt;</span>
                  <Link href="#" className="hover:text-yellow-500 text-black">
                    Lifestyle (19)
                  </Link>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">&gt;</span>
                  <Link href="#" className="hover:text-yellow-500 text-black">
                    Media (10)
                  </Link>
                </li>
              </ul>
            </section>
            <section className="mb-10">
              <h2 className="text-xl font-bold mb-4 text-black underline underline-offset-4 decoration-yellow-500">
                About
              </h2>
              <div className="border-b border-dotted border-gray-300 pb-4 pr-4">
                <p className="text-black">
                  Alienum phaedrum torquatos nec eu, vis detraxit periculis ex,
                  nihil expetendis in mei.
                </p>
              </div>
            </section>

            {/* Follow Us */}
            
            <div className="">
              <h3 className="text-lg font-bold text-black mb-4">FOLLOW US</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-black">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="#" className="hover:text-black">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="#" className="hover:text-black">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
              </div>
              <p className="text-gray-400 text-sm"></p>
            </div>
          </div>

          {/* right */}
          <div className="w-full md:w-2/3">
            <article className="bg-white mb-10">
              <Image
                src="/images/hero3.avif"
                alt="Featured Post"
                width={800}
                height={400}
                className="rounded-lg"
              />
              <h2 className="text-3xl font-bold mt-6 text-black">
                Street Inspiration
              </h2>
              <div className="text-black text-sm mt-2">
                by Jane Doe | Media | Mar 3, 2016
              </div>
              <p className="text-black mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Debitis, tenetur dignissimos? Soluta minima fugiat vel nisi
                excepturi cum animi? Laudantium totam, eius neque labore autem
                reprehenderit nisi magni aut perferendis quae adipisci tenetur
                ratione incidunt eligendi numquam cupiditate similique
                doloremque dolores dolor minima mollitia ut laborum vel!
                Dignissimos quam tenetur similique aperiam. Voluptas aliquam,
                rem odit tenetur asperiores nobis dolorum? At hic facere
                repellendus quae nobis incidunt nostrum voluptatibus saepe!
                Doloribus hic similique, dolorem deserunt, temporibus ipsum
                dignissimos dolor animi nostrum laudantium possimus! Dolor
                temporibus nam nesciunt cupiditate incidunt veniam?
              </p>
            </article>
          </div>
        </div>

        {/* 2nd section  */}
        <div className="p-4 px-10 w-full flex flex-col md:flex md:flex-row">
          {/* left  */}
          <div className="w-full md:w-1/3 md:px-5">
            {/* Tags Section */}
            <section className="mb-10">
              <h2 className="text-xl font-bold mb-4 text-black underline underline-offset-4 decoration-yellow-500">
                Tags
              </h2>
              <div className="flex flex-wrap gap-2">
                {[
                  "Artists",
                  "Courses",
                  "Development",
                  "Exhibitions",
                  "Features",
                  "Gadgets",
                  "Internships",
                  "Jobs",
                  "Lectures",
                  "Students",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-200 text-black px-3 py-1 rounded-full hover:bg-yellow-500 cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </section>

            {/* Search Section */}
            <section>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
                <i className="fas fa-search absolute right-4 top-3 text-gray-400"></i>
              </div>
            </section>

            <div className="w-full lg:w-full mt-10">
              <div
                className="relative h-48 bg-cover bg-center flex items-center justify-center text-white"
                style={{ backgroundImage: "url('/images/hero1.avif')" }}
              >
                <div className="text-center">
                  <h3 className="text-lg font-bold">Place Your Banner Here</h3>
                  <div className="mt-2 border-t-2 border-yellow-500 w-8 mx-auto"></div>
                </div>
              </div>
            </div>
          </div>

          {/* right */}
          <div className="w-full md:w-2/3">
            {/* Banner Section */}
            <div className="mt-10 flex flex-wrap gap-4">
              <div className="w-full lg:w-full">
                <div className="bg-white shadow-md p-6 rounded-lg">
                  <div className="text-black text-sm mb-2">
                    by Jane Doe | Media | Mar 3, 2016
                  </div>
                  <h3 className="text-xl font-bold text-black">
                    What Stands In The Way Becomes The Way
                  </h3>
                  <p className="text-black mt-4">Artists, Lectures</p>
                  <div className="flex items-center justify-between mt-6">
                    <div className="text-yellow-500">:</div>
                    <div className="bg-red-500 flex space-x-2">
                      <i className="fab fa-facebook-f text-black hover:text-blue-500"></i>
                      <i className="fab fa-twitter text-black hover:text-blue-500"></i>
                      <i className="fab fa-linkedin-in text-black hover:text-blue-700"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              <div className="w-full lg:w-full">
                <div className="bg-white shadow-md p-6 rounded-lg">
                  <div className="text-black text-sm mb-2">
                    by Jane Doe | Media | Mar 3, 2016
                  </div>
                  <h3 className="text-xl font-bold text-black">
                    What Stands In The Way Becomes The Way
                  </h3>
                  <p className="text-black mt-4">Artists, Lectures</p>
                  <div className="flex items-center justify-between mt-6">
                    <div className="text-yellow-500">:</div>
                    <div className="bg-red-500 flex space-x-2">
                      <i className="fab fa-facebook-f text-black hover:text-blue-500"></i>
                      <i className="fab fa-twitter text-black hover:text-blue-500"></i>
                      <i className="fab fa-linkedin-in text-black hover:text-blue-700"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col  border-b border-gray-200">
              {/* Image Section */}
              <div className="w-full mt-5 ">
                <Image
                  src="/images/hero2.avif" 
                  alt="Cyclist"
                  width={1920} 
                  height={1080} 
                  className="w-full h-[70vh] rounded-md object-cover" 
                  priority 
                />
              </div>
              {/* Content Section */}
              <div className="bg-white flex flex-col w-full  p-4">
                <div className="flex gap-4 mb-4">
                  <span className="text-sm font-medium text-gray-500">
                    by Jane Doe
                  </span>
                  <span className="text-sm font-medium text-gray-500">
                    Media
                  </span>
                  <span className="text-sm font-medium text-gray-500">
                    Mar 3, 2016
                  </span>
                </div>
                <h2 className="text-xl font-bold text-gray-800 mb-2">
                  WHAT’S MOST IMPORTANT TO YOU
                </h2>
                <p className="text-sm text-gray-600 mb-4">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Voluptates, provident? Facilis vero aperiam aspernatur
                  praesentium id optio voluptas. Ipsa neque, tenetur repudiandae
                  corporis reiciendis, saepe, ipsam harum sed dolores
                  necessitatibus recusandae dignissimos corrupti aperiam commodi
                  ex hic? Iusto voluptatem nesciunt cum ducimus quisquam rem
                  minima veritatis mollitia perferendis expedita? Et architecto,
                  nisi, accusantium facere suscipit beatae perferendis
                  asperiores molestias a praesentium nobis sed porro, id enim
                  blanditiis officiis quo ducimus? Laboriosam suscipit amet,
                  debitis perspiciatis quas ipsum nisi vitae cumque. Quasi
                  voluptatem odio illum est fugit, laudantium autem ab ullam
                  dicta, asperiores enim earum quos natus, voluptate architecto
                  corporis rem!
                </p>
                <div className="flex gap-2 mt-2 mb-4">
                  <span className="text-sm text-yellow-500">Development</span>
                  <span className="text-sm text-yellow-500">Exhibitions</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-sm text-gray-500"></span>
                  <div className="flex gap-2">
                    <a href="#" className="text-gray-500 hover:text-gray-800">
                      Facebook
                    </a>
                    <a href="#" className="text-gray-500 hover:text-gray-800">
                      Twitter
                    </a>
                    <a href="#" className="text-gray-500 hover:text-gray-800">
                      LinkedIn
                    </a>
                    <a href="#" className="text-gray-500 hover:text-gray-800">
                      Tumblr
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white flex flex-col w-full mt-5  p-4">
              <div className="flex gap-4 mb-4">
                <span className="text-sm font-medium text-gray-500">
                  by Jane Doe
                </span>
                <span className="text-sm font-medium text-gray-500">Media</span>
                <span className="text-sm font-medium text-gray-500">
                  Mar 3, 2016
                </span>
              </div>
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                Direction is Essential
              </h2>
              <p className="text-sm text-gray-600 mb-4"></p>
              <div className="flex gap-2 mt-2 mb-4">
                <span className="text-sm text-yellow-500">Development</span>
                <span className="text-sm text-yellow-500">Exhibitions</span>
              </div>
              {/* Follow Us Section */}
              <div>
                <h3 className="text-lg font-bold text-black mb-4">FOLLOW US</h3>
                <div className="flex space-x-4">
                  <a href="#" className="hover:text-white">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                  <a href="#" className="hover:text-white">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                  <a href="#" className="hover:text-white">
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                </div>
                <p className="text-gray-400 text-sm"></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default BlogPage;
