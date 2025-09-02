import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function Sort({ sortOptions,onChange }) {
  return (
      <Select onValueChange={(value) => onChange(value)}>
      <SelectTrigger className="w-[200px] data-[size=default]:h-11">
        <SelectValue placeholder="Select influencer" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {sortOptions.map((sort) => (
            <SelectItem key={sort.value} value={sort.id}>
              {sort.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
