import { Skeleton } from "@/components/ui/skeleton";

export function AlbumSkeleton() {
  return (
    <div className="container grid grid-cols-2 md:grid-cols-3 gap-5 px-4">
      {Array.from({ length: 6 }).map((_, n) => (
        <Skeleton
          key={n}
          className="relative -z-20 bg-primary-foreground space-y-3 rounded-md shadow-sm p-2 w-full h-[20vh]"
        >
          <div className="absolute space-y-3 bottom-3 left-5">
            <Skeleton className="h-4 w-[150px] md:w-[250px]" />
            <Skeleton className="h-4 w-[150px] md:w-[200px]" />
          </div>
          <div className="w-8 h-8 shadow-sm dark:shadow-lg rounded-full cursor-pointer bg-foreground items-center flex flex-col justify-center absolute bottom-2 right-2">
            <Skeleton className="h-6 w-6" />
          </div>
        </Skeleton>
      ))}
    </div>
  );
}
