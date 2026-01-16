import dayjs from "dayjs";
import { getRandomInterviewCover } from "@/lib/utils";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import DisplayTechIcons from "./DisplayTechIcons";

const InterviewCard = (props: InterviewCardProps) => {
  const feedback = null as Feedback | null;
  const normalizedType = /mix/gi.test(props.type) ? 'Mixed' : props.type;
  const formattedDate = dayjs(feedback?.createdAt || props.createdAt || Date.now()).format('DD-MM-YYYY');

  return (
    <div className="card-border w-[360] max-sm:w-full min-h-[96]">
      <div className="card-interview">
        <div>
          <div className="absolute top-0 right-0 w-fit px-4 py-2 rounded-bl-lg bg-light-600">
            <p className="badge-text">{normalizedType}</p>
          </div>
          <Image src={getRandomInterviewCover()} alt="cover image" width={90} height={90} className="rounded-full"></Image>
          <h3 className="mt-5 capitalize">{props.role} Interview</h3>
          <div className="flex flex-row gap-5 mt-3">
            <div className="flex flex-row-gap-2">
              <Image src="/calendar.svg" alt="calendar" width={22} height={22}></Image>
              <p>{formattedDate}</p>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <Image src="/star.svg" alt="star" width={22} height={22}></Image>
              <p>{feedback?.totalScore || "---"}/100</p>
            </div>
          </div>
          <p className="line-clamp-2 mt-5">
            {feedback?.finalAssessment || "You haven't taken the interview yet. Take it now to improve your skills."}
          </p>
        </div>
        <div className="flex flex-row justify-between">
          <DisplayTechIcons techStack={props.techstack} />
          <Button className="btn-primary">
            <Link href={feedback ? `/interview/${props.interviewId}/feedback` : `/interview/${props.interviewId}`}>
              {feedback ? "Check Feedback" : "View Interview"}
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default InterviewCard