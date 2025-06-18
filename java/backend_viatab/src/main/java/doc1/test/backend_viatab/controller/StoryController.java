package doc1.test.backend_viatab.controller;

import doc1.test.backend_viatab.model.Story;
import doc1.test.backend_viatab.repository.DepartmentRepository;
import doc1.test.backend_viatab.repository.StoryRepository;
import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class StoryController {
    private final StoryRepository stories;
    private final DepartmentRepository depts;

    public StoryController(StoryRepository stories, DepartmentRepository depts) {
        this.stories = stories;
        this.depts   = depts;
    }

    // 1) List all departments
    @GetMapping("/departments")
    public List<Map<String,Object>> listDepts() {
        var all = depts.findAll();
        var out = new ArrayList<Map<String,Object>>();
        all.forEach(d -> out.add(Map.of("id", d.getId(), "name", d.getName())));
        return out;
    }

    // 2) Fetch by department ID (legacy)
    @GetMapping("/departments/{id}/stories")
    public List<Story> storiesByDept(@PathVariable Long id) {
        return stories.findByDepartmentId(id);
    }

    // 3) New: fetch by department Name via query‑param
    @GetMapping("/stories")
    public List<Story> storiesByDeptName(@RequestParam("department") String name) {
        var dept = depts.findByName(name)
                .orElseThrow(() -> new NoSuchElementException("No department: " + name));
        return stories.findByDepartmentId(dept.getId());
    }

    // 4) Add story to a given department ID
    @PostMapping("/departments/{id}/stories")
    public Story addStory(@PathVariable Long id, @RequestBody Story s) {
        var dept = depts.findById(id).orElseThrow();
        s.setDepartment(dept);
        return stories.save(s);
    }

    // 5) Update existing story
    @PutMapping("/stories/{id}")
    public Story update(@PathVariable Long id, @RequestBody Story s) {
        var existing = stories.findById(id).orElseThrow();
        existing.setTitle(s.getTitle());
        existing.setContent(s.getContent());
        return stories.save(existing);
    }

    // 6) Delete story
    @DeleteMapping("/stories/{id}")
    public void delete(@PathVariable Long id) {
        stories.deleteById(id);
    }
}
