import { Skeleton } from "@/components/ui/skeleton";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";

function AlbumSkeleton() {
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

function TracksTableSkeleton({ rows = 5 }) {
  return (
    <Table>
      <TableBody>
        {Array.from({ length: rows }).map((_, index) => (
          <TableRow key={index} className="flex items-center">
            <TableCell className="flex-none pr-0">
              <Button size="icon" variant="ghost" disabled>
                <Skeleton className="h-4 w-4" />
              </Button>
            </TableCell>
            <TableCell className="flex-grow">
              <Skeleton className="h-4 w-full max-w-[200px]" />
            </TableCell>
            <TableCell className="flex-none">
              <Skeleton className="h-4 w-12" />
            </TableCell>
            <TableCell className="flex-none space-x-2 text-right">
              <Skeleton className="inline-block h-8 w-8" />
              <Skeleton className="inline-block h-8 w-8" />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export { AlbumSkeleton, TracksTableSkeleton };
