import React from "react";
import SkillCard from "./Helpers/SkillCard";

const Skills = () => {
    return (
        <div id="blog-skills" className="pt-[5rem] pb-[3rem] bg-black">
            <div className="grid w-[80%] mx-auto grid-cols-1 lg:grid-cols-7 gap-[2rem] items-center">
                <div className="col-span-3">
                    <p className="heading__mini">My Skills</p>
                    <h1 className="heading__primary">
                        Let&apos;s Explor Popular <span className="text-yellow-300">Skills</span>{" "}
                        & Experience
                    </h1>
                    <p className="text-[15px] mb-[1.5rem] text-white opacity-70 mt-[1.5rem]">
                        As someone who loves to experience new technologies, I have learned
                        and had access to many programming languages ​​and technologies that
                        are very popular at the moment.
                    </p>
                    <button className="relative flex h-[50px] w-40 items-center justify-center font-semibold overflow-hidden bg-red-500 text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-blue-600 before:duration-500 before:ease-out hover:before:h-56 hover:before:w-56">
                        <span className="relatve z-10">Learn More</span>
                    </button>
                </div>

                <div className="col-span-4">
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-[1rem] items-center">
                        <div>
                            <SkillCard title="PHP" image="/images/php.png" />
                        </div>

                        <div>
                            <SkillCard title="Golang" image="/images/go.png" />
                        </div>

                        <div>
                            <SkillCard title="Javascript" image="/images/js.svg" />
                        </div>

                        <div>
                            <SkillCard title="HTML" image="/images/html.svg" />
                        </div>

                        <div>
                            <SkillCard title="CSS" image="/images/css.svg" />
                        </div>

                        <div>
                            <SkillCard title="Tailwin CSS" image="/images/tailwin.png" />
                        </div>

                        <div>
                            <SkillCard title="React" image="/images/react.svg"
                            />
                        </div>

                        <div>
                            <SkillCard title="Vuejs" image="/images/vue.svg" />
                        </div>

                        <div>
                            <SkillCard title="Laravel" image="/images/laravel.png" />
                        </div>

                        <div>
                            <SkillCard title="Livewire" image="/images/livewire.png" />
                        </div>

                        <div>
                            <SkillCard title="Mysql" image="/images/mysql.png" />
                        </div>

                        <div>
                            <SkillCard title="PostgreSql" image="/images/postgre.png" />
                        </div>

                        <div>
                            <SkillCard title="MogoDB" image="/images/mongo.svg" />
                        </div>

                        <div>
                            <SkillCard title="Redis" image="/images/redis.png" />
                        </div>

                        <div>
                            <SkillCard title="Git" image="/images/git.png" />
                        </div>

                        <div>
                            <SkillCard title="Docker" image="/images/docker.png" />
                        </div>

                        <div>
                            <SkillCard title="Rabitmq" image="/images/rabitmq.png" />
                        </div>

                        <div>
                            <SkillCard title="Consul" image="/images/consul.png" />
                        </div>

                        <div>
                            <SkillCard title="Elasticsearch" image="/images/elasticsearch.png" />
                        </div>

                        <div>
                            <SkillCard title="Jenkin" image="/images/jenkin.png" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
