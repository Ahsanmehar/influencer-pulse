import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function Platform({ platformOptions, label = "Platform", onChange }) {
  return (
    <div className="w-full bg-white shadow-one rounded-lg py-4 px-5">
      <label className="block mb-2 text-sm font-medium text-black">
        {label}
      </label>

      <Select onValueChange={(value) => onChange(value)}>
        <SelectTrigger className="w-full data-[size=default]:h-11">
          <SelectValue placeholder="All Platform" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {platformOptions.map((plat) => (
              <SelectItem key={plat.id} value={plat.id}>
                {plat.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
